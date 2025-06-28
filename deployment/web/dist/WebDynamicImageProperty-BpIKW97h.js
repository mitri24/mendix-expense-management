import { getSubscribedObjectState$, getObjectByPath$, getAttribute$, fromComputation$, flatMapL, getData, getOrCrashL, Access, unavailable, available, asProperty, asDynamicValue$, fromRequest$ } from './index-UACZNrBd.js';
import { withObjectSharing$, withFirstLoadDoneSharing$ } from './ActionButton-DV0c4BuZ.js';

function getFileValue$(name, scope, path, store, widgetId, needsAccessToChangedDate, showAsThumbnail, shareObject) {
  const rootObject$ = getSubscribedObjectState$(store, scope), object$ = path ? getObjectByPath$(rootObject$, path, store) : rootObject$, sharedObject$ = shareObject ? withObjectSharing$(object$, store, widgetId, false) : withFirstLoadDoneSharing$(object$, store, widgetId), hasContents$ = getAttribute$(sharedObject$, "HasContents", store), contents$ = getAttribute$(sharedObject$, "Contents", store), changedDate$ = getAttribute$(sharedObject$, "changedDate", store), fileName$ = getAttribute$(sharedObject$, "Name", store);
  return fromComputation$(name, () => flatMapL(sharedObject$.dependOn(), (obj) => {
    const data = getData();
    if (obj.metaData.isRemoteFileEntity) {
      return getOrCrashL(contents$.dependOn()).access === Access.None ? unavailable() : available({ uri: data.getDocumentUrl(obj.getGuid(), "", false) });
    }
    const hasContents = getOrCrashL(hasContents$.dependOn()), changedDate = getOrCrashL(changedDate$.dependOn()), fileName = getOrCrashL(fileName$.dependOn());
    if (hasContents.access === Access.None || !hasContents.value || fileName.access === Access.None)
      return unavailable();
    if (needsAccessToChangedDate && changedDate.access === Access.None)
      return unavailable();
    const uri = data.getDocumentUrl(obj.getGuid(), (changedDate.access !== Access.None ? changedDate.value : void 0)?.getTime() ?? "", showAsThumbnail, fileName.value);
    return available({ uri, name: fileName.value });
  }));
}

function dynamicImageProperty(fetchFn, needsAccessToChangedDate) {
  return asProperty(({ scope, path, showAsThumbnail, shareObject }, store, widgetId, propertyPath) => {
    const fileValue$ = getFileValue$(`Image path of ${widgetId}/${propertyPath}`, scope, path, store, widgetId, needsAccessToChangedDate, Boolean(showAsThumbnail), Boolean(shareObject));
    return asDynamicValue$(fromRequest$(`Fetch an image for ${widgetId}/${propertyPath}`, () => {
      const fileValue = fileValue$.dependOn();
      return "available" !== fileValue.status ? fileValue : fetchFn(fileValue.value.uri, fileValue.value.name).then((uri) => available({ uri, ...fileValue.value.name && { name: fileValue.value.name } }));
    }));
  });
}

const WebDynamicImageProperty = dynamicImageProperty((path) => new Promise((resolve, reject) => {
  getData().getImageUrl(path, (uri) => resolve(uri), reject);
}), false);

export { WebDynamicImageProperty };
