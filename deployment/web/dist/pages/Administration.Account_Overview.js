import { fromRequest$, available, withObjectKeeping$, fromComputation$, mapL, evaluateExpressionValue, scheduleSideEffect, toObjectItem, readUntracked, LogManager, asProperty, toFriendlyId, getSubscribedObjectState$, getObjectsByPath$, fromConstant$, onlineData, unavailable, ensureAssociationId, registerAssociationType, registerFilterAttribute, asReloadable$, getObjectByPath$, getSession, getFocus, getHTMLElement, ensure, isNavigableElement, isHTMLElement, reactExports, newId, Big, useForceUpdate, tuple, repeat, reaction, useStoreBackendValue, jsxRuntimeExports, classNames, NestedStoreProvider, asPluginWidgets, selectTranslation } from '../index-UACZNrBd.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-DHtf5l1V.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-DV0c4BuZ.js';
import { handleDataSourceExecutionError } from '../ymLH28GV-Dq2RASU6.js';
import { objectListTrigger, convertFilterExpressionToExpression, convertSortInstructionToExpression, getCompareFunction, withSetItemsStoreSideEffect$, asReloadableListValue$, withFirstLoadDoneSharing$, listItemProperty, DatabaseObjectListProperty } from '../CTcC6PjV-B-x7hXp6.js';
import '../uEIG9e6s-DbIaJy7J.js';
import { getCurrentRefObjectItem$ } from '../AssociationProperty-CFikPVbv.js';
import '../BQKVXLaf-mvtyIvU3.js';
import { ListAttributeProperty } from '../ListAttributeProperty-B_FVRtoG.js';
import { ListExpressionProperty } from '../ListExpressionProperty-2EKdiBPA.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-BQpdF_32.js';
import { WebIconProperty } from '../WebIconProperty-Dp1h0TWT.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-CvgwjdAQ.js';
import { Container, Text } from '../Text-Hz4G3gHr.js';
import { DatagridWidgetModule, content as content$1 } from '../Atlas_Core.Atlas_Default-CIUGz51Y.js';
import { DatagridDateFilterWidgetModule, DatagridTextFilterWidgetModule } from '../DatagridTextFilter-DnGgXNC3.js';
import { DatagridDropdownFilterWidgetModule } from '../DatagridDropdownFilter-z7EGo8zN.js';
import { Div } from '../Div-Dhe9jsr5.js';
import { ListView } from '../ListView-oH4y20_d.js';
import { useLegacyResize, getBox } from '../bdxqAC6d-D5pvApxC.js';
import { usePersistentState } from '../SprintrFeedback-CHsxspHz.js';
import '../InlineText-edXOhouE.js';
import '../WebStaticImageProperty-Co3mfJiM.js';

function getClientPagedList$(config, store, widgetId, parameters$, fetchData) {
  const { fetchTrigger$, retrieveParameters$, silentlyResetOffset, needTotalCount$, delayedRetrieveParametersSetters, immediateRetrieveParametersSetters, loadedCallback } = objectListTrigger(config, [], store, widgetId, parameters$), fetchResult$ = fromRequest$(`Load data of ${widgetId}`, () => {
    const trigger = fetchTrigger$.dependOn();
    return "available" !== trigger.status ? trigger : trigger.value.empty ? available({ main: [], extra: [] }) : fetchData(trigger.value.parameters);
  }), objects$ = withObjectKeeping$(widgetId, store, fetchResult$, (x) => x.main.concat(x.extra)), filter$ = fromComputation$(`Filter of ${widgetId}`, () => retrieveParameters$.dependOn().filter), filteredObjects$ = fromRequest$(`Filtered data of ${widgetId}`, () => {
    const allObjects = objects$.dependOn();
    return "available" !== allObjects.status || 0 === allObjects.value.main.length ? mapL(allObjects, (a) => a.main) : async function(filter, mxObjects) {
      if (!filter)
        return mxObjects;
      const expression = convertFilterExpressionToExpression(filter);
      return (await Promise.all(mxObjects.map((mxObject) => evaluateExpressionValue(expression, mxObject).then((result) => result ? mxObject : void 0)))).filter((obj) => !!obj);
    }(filter$.dependOn(), allObjects.value.main).then((result) => available(result));
  }), sortOrder$ = fromComputation$(`Sort order of ${widgetId}`, () => retrieveParameters$.dependOn().sortOrder), sortedObjects = fromRequest$(`Sorted data of ${widgetId}`, () => {
    const unsortedObjects = filteredObjects$.dependOn();
    return "available" !== unsortedObjects.status || 0 === unsortedObjects.value.length ? unsortedObjects : async function(sortOrder, mxObjects) {
      if (0 === sortOrder.length)
        return mxObjects;
      return (await Promise.all(mxObjects.map((mxObject) => Promise.all(sortOrder.map((sortInstruction) => {
        const sortValueExpression = convertSortInstructionToExpression(sortInstruction);
        return evaluateExpressionValue(sortValueExpression, mxObject);
      })).then((sortValues) => ({ sortValues, mxObject }))))).sort(getCompareFunction(sortOrder)).map((sortItem) => sortItem.mxObject);
    }(sortOrder$.dependOn(), unsortedObjects.value).then((result) => available(result));
  }), markAsLoaded = () => store.addUpdateCallback(loadedCallback), listValue$ = fromComputation$(`Paged data of ${widgetId}`, () => {
    const objects = sortedObjects.dependOn();
    switch (objects.status) {
      case "loading":
        return { status: "loading", ...readUntracked(retrieveParameters$), ...immediateRetrieveParametersSetters };
      case "unavailable":
        return markAsLoaded(), { status: "unavailable", ...retrieveParameters$.dependOn(), ...immediateRetrieveParametersSetters };
      case "available":
        let { offset, limit, sortOrder, filter } = retrieveParameters$.dependOn();
        return offset >= objects.value.length && (offset = 0, scheduleSideEffect(silentlyResetOffset)), markAsLoaded(), { status: "available", offset, limit, sortOrder, filter, items: objects.value.slice(offset, offset + limit).map((obj) => toObjectItem(obj, config.dataSourceId)), totalCount: needTotalCount$.dependOn() ? objects.value.length : void 0, hasMoreItems: offset + limit < objects.value.length || 0 === limit, ...delayedRetrieveParametersSetters };
    }
  }), storedItemsListValue$ = withSetItemsStoreSideEffect$(widgetId, config.dataSourceId, listValue$, store);
  return asReloadableListValue$(withFirstLoadDoneSharing$(storedItemsListValue$, store, widgetId));
}

const logger = LogManager.get().getLogger(), AssociationObjectListProperty = asProperty((config, store, widgetId) => {
  const friendlyId = toFriendlyId(widgetId), context$ = getSubscribedObjectState$(store, config.scope), clientSideResult$ = config.directPath ? getObjectsByPath$(context$, config.directPath, store, true) : fromConstant$(available("cacheMiss"));
  return getClientPagedList$(config, store, widgetId, context$, async function(context) {
    const clientSideResult = clientSideResult$.dependOn();
    if ("available" === clientSideResult.status && "cacheMiss" !== clientSideResult.value)
      return logFetchEnd({ mxObjects: clientSideResult.value, extra: [] }), available({ main: clientSideResult.value, extra: [] });
    let result;
    contextGuid = context.getGuid(), logger.debug(`Fetching data with context '${contextGuid}' and operationId '${config.operationId}' for widget ${friendlyId}`);
    var contextGuid;
    try {
      result = await onlineData().retrieveByPath(context.getGuid(), config.operationId);
    } catch (e) {
      return handleDataSourceExecutionError(widgetId, e, "association"), unavailable();
    }
    return logFetchEnd(result), available({ main: result.mxObjects, extra: result.extra });
  });
  function logFetchEnd({ mxObjects, extra }) {
    logger.debug(`Received ${mxObjects.length} objects and ${extra.length} objects over schema for widget ${friendlyId}`, "object ids:", mxObjects.map((o) => o.getGuid()), "extra ids:", extra.map((o) => o.getGuid()));
  }
});

const AssociationMetaDataProperty = asProperty((config) => {
  const { id, filterable } = listAssociationMetaData(config);
  return fromConstant$({ id, filterable });
});
function listAssociationMetaData(config) {
  const endPointPath = `${config.attribute}/${config.endpointEntity}`, associationPath = config.path ? `${config.path}/${endPointPath}` : endPointPath, id = ensureAssociationId(associationPath, config.dataSourceId, config.selectableObjectsId), filterable = config.filterable && !(mx.isOffline() && config.path);
  return registerAssociationType(id, config.type), registerFilterAttribute(id, filterable), { id, filterable, associationPath };
}

const ListAssociationProperty = asProperty((config, store, widgetId, propertyPath) => {
  const { associationPath, id, filterable } = listAssociationMetaData(config), description = `List reference "${widgetId}/${propertyPath}"`;
  function associationValue$(refObjects$) {
    const currentReferencedObjects$ = getCurrentRefObjectItem$(description, refObjects$, config), value$ = fromComputation$(`Readable value of ${description}`, () => {
      const currentReferencedObjects = currentReferencedObjects$.dependOn(), status = currentReferencedObjects.status, value = "available" !== currentReferencedObjects.status ? void 0 : currentReferencedObjects.value;
      return { status, value: Object.freeze(value) };
    });
    return asReloadable$(value$, (v) => ({ value: v.value }));
  }
  return listItemProperty(function(object) {
    const rootObject$ = fromConstant$(available(object));
    switch (config.type) {
      case "Reference":
        return associationValue$(getObjectByPath$(rootObject$, associationPath, store));
      case "ReferenceSet":
        return associationValue$(getObjectsByPath$(rootObject$, associationPath, store));
    }
  }, description, config.dataSourceId, { id, filterable, type: config.type });
});

let rightToLeft;
function isRightToLeft() {
  if (void 0 === rightToLeft) {
    const session = getSession();
    rightToLeft = "rtl" === session.getConfig("uiconfig.direction");
  }
  return rightToLeft;
}

var NavigationKeys, NavigationCommand;
!function(NavigationKeys2) {
  NavigationKeys2[NavigationKeys2.UpDown = 0] = "UpDown", NavigationKeys2[NavigationKeys2.LeftRight = 1] = "LeftRight";
}(NavigationKeys || (NavigationKeys = {})), function(NavigationCommand2) {
  NavigationCommand2[NavigationCommand2.FORWARD = 0] = "FORWARD", NavigationCommand2[NavigationCommand2.BACKWARD = 1] = "BACKWARD";
}(NavigationCommand || (NavigationCommand = {}));
class RovingTabIndex {
  constructor(keys, container, childQuery = findNavigableDescendants) {
    this.children = [], this.currentIndex = -1, this.focused = false, this.updating = false, this.shiftingFocus = false, this.mutationObserver = new MutationObserver(this.onMutation.bind(this)), this.keys = keys, this.container = container, this.childQuery = childQuery, this.keyListener = this.createKeyListener(), this.focusInListener = this.createFocusInListener(), this.focusOutListener = this.createFocusOutListener(), this.addListeners(), this.handleMutation();
  }
  onMutation(_records) {
    this.handleMutation();
  }
  handleMutation() {
    const children = (elements = this.childQuery(this.container), Array.isArray(elements) ? elements : Array.from(elements).filter((e) => e instanceof HTMLElement)).filter((c) => !c.hasAttribute("data-roving-inactive"));
    var elements;
    this.doWithoutMutations(() => this.updateChildren(children));
  }
  setChildQuery(childQuery = findNavigableDescendants) {
    this.childQuery = childQuery;
  }
  setOnActiveRowChange(callback) {
    this.onActiveRowChange = callback;
  }
  setContainer(newContainer) {
    this.container !== newContainer && (this.removeListeners(), this.container = newContainer, this.addListeners(), this.handleMutation());
  }
  updateChildren(newChildren) {
    const oldCurrent = this.getCurrentElement();
    if (function(oldChildren, newChildren2) {
      if (a = oldChildren, b = newChildren2, a.length === b.length && a.every((e, i) => e === b[i]))
        return false;
      var a, b;
      const oldSet = /* @__PURE__ */ new Set();
      return oldChildren.forEach((v) => oldSet.add(v)), newChildren2.forEach((v) => {
        oldSet.delete(v) || v.setAttribute("data-roving-tabindex", "");
      }), oldSet.forEach((v) => unmanageElement(v)), true;
    }(this.children, newChildren) && (this.children = newChildren.slice()), oldCurrent) {
      const newIndex = newChildren.indexOf(oldCurrent);
      if (this.setCurrentIndex(-1 !== newIndex ? newIndex : this.findValidIndex(false, 0)), this.focused) {
        const newCurrent = this.getCurrentElement();
        setTimeout(() => this.restoreFocus(oldCurrent !== newCurrent), 0);
      }
    } else
      this.updateTabIndices();
    this.updateState();
  }
  restoreFocus(force) {
    if (this.shiftingFocus && !force)
      return;
    const active = getFocus(), current = this.getCurrentElement();
    (force || !active || current && current !== active && current.contains(active)) && this.focusCurrentElement();
  }
  updateState() {
    const current = this.getCurrentElement();
    current && isInteractive(current) || (this.setCurrentIndex(this.findValidIndex()), this.focused && this.focusCurrentElement());
  }
  destroy() {
    this.mutationObserver.disconnect(), this.removeListeners(), this.children.forEach(unmanageElement);
  }
  addListeners() {
    this.container.addEventListener("keydown", this.keyListener), this.container.addEventListener("focusin", this.focusInListener), this.container.addEventListener("focusout", this.focusOutListener);
  }
  removeListeners() {
    this.container.removeEventListener("keydown", this.keyListener), this.container.removeEventListener("focusin", this.focusInListener), this.container.removeEventListener("focusout", this.focusOutListener);
  }
  doWithoutMutations(callback) {
    const wasUpdating = this.updating;
    wasUpdating || (this.updating = true, this.mutationObserver.disconnect()), callback(), wasUpdating || (this.mutationObserver.observe(this.container, { childList: true, attributes: true, subtree: true }), this.updating = false);
  }
  createKeyListener() {
    return (e) => {
      const command = this.getNavigationCommand(e);
      if (null !== command) {
        e.preventDefault();
        const reverse = command.valueOf() === NavigationCommand.BACKWARD.valueOf();
        this.setCurrentIndex(this.findValidIndex(reverse)), this.focusCurrentElement();
      }
    };
  }
  createFocusInListener() {
    return (e) => {
      const target = getHTMLElement(ensure(e.target));
      let newIndex = -1, current = target;
      for (; current && (newIndex = this.children.indexOf(current), -1 === newIndex); )
        current = current.parentElement;
      -1 !== newIndex && this.setCurrentIndex(newIndex), target && target !== current && !isNavigableElement(target) && window.setTimeout(() => this.focusCurrentElement(), 0), this.focused = true;
    };
  }
  createFocusOutListener() {
    return (e) => {
      const current = this.getCurrentElement(), relatedTarget = getHTMLElement(ensure(e.relatedTarget ?? document.activeElement));
      this.shiftingFocus = true, relatedTarget && this.container.contains(relatedTarget) || window.setTimeout(() => {
        this.focused = false;
      }, 0), ensure(e.target) === current && window.setTimeout(() => {
        isInteractive(current) && null !== current.parentNode || this.doWithoutMutations(() => {
          this.updateState(), this.focusCurrentElement();
        });
      }, 0), window.setTimeout(() => {
        this.shiftingFocus = false;
      }, 0);
    };
  }
  getNavigationCommand(e) {
    switch (this.keys) {
      case NavigationKeys.UpDown:
        switch (e.key) {
          case "ArrowUp":
          case "Up":
            return NavigationCommand.BACKWARD;
          case "ArrowDown":
          case "Down":
            return NavigationCommand.FORWARD;
        }
        break;
      case NavigationKeys.LeftRight: {
        const rtl = isRightToLeft();
        switch (e.key) {
          case "ArrowLeft":
          case "Left":
            return rtl ? NavigationCommand.FORWARD : NavigationCommand.BACKWARD;
          case "ArrowRight":
          case "Right":
            return rtl ? NavigationCommand.BACKWARD : NavigationCommand.FORWARD;
        }
        break;
      }
    }
    return null;
  }
  setCurrentIndex(index) {
    this.currentIndex = index, this.updateTabIndices(), this.onActiveRowChange && this.onActiveRowChange(index);
  }
  focusCurrentElement() {
    const current = this.getCurrentElement();
    current && current.focus();
  }
  updateTabIndices() {
    this.doWithoutMutations(() => {
      this.children.forEach((c, i) => c.setAttribute("tabindex", i === this.currentIndex ? "0" : "-1"));
    });
  }
  findValidIndex(reverse = false, offset = 1, startIndex = this.currentIndex) {
    const newIndex = reverse ? findLastIndexInArray(this.children, isInteractive, startIndex - offset) : findFirstIndexInArray(this.children, isInteractive, startIndex + offset);
    return -1 !== newIndex ? newIndex : reverse ? findFirstIndexInArray(this.children, isInteractive) : findLastIndexInArray(this.children, isInteractive);
  }
  getCurrentElement() {
    return -1 !== this.currentIndex ? this.children[this.currentIndex] : null;
  }
}
function unmanageElement(e) {
  e.removeAttribute("tabindex"), e.removeAttribute("data-roving-tabindex");
}
function findFirstIndexInArray(elements, predicate, startIndex = 0) {
  const index = elements.slice(startIndex).findIndex(predicate);
  return -1 === index ? -1 : index + startIndex;
}
function findLastIndexInArray(elements, predicate, startIndex = elements.length - 1) {
  const index = elements.slice(0, startIndex + 1).reverse().findIndex(predicate);
  return -1 === index ? -1 : startIndex - index;
}
function findNavigableDescendants(element, output = []) {
  for (let i = 0, len = element.children.length; i < len; i++) {
    const child = element.children.item(i);
    isHTMLElement(child) && ((child.hasAttribute("data-roving-tabindex") || isNavigableElement(child)) && output.push(child), findNavigableDescendants(child, output));
  }
  return output;
}
function isInteractive(element) {
  return function(element2) {
    const computedStyle = window.getComputedStyle(element2);
    return "visible" === computedStyle.visibility && "none" !== computedStyle.display;
  }(element) && function(element2) {
    return !element2.disabled;
  }(element);
}
function useRovingTabIndex(elementRef, navigationKeys, childQuery) {
  reactExports.useLayoutEffect(() => {
    const rovingTabIndex = new RovingTabIndex(navigationKeys, ensure(elementRef.current), childQuery);
    return () => rovingTabIndex.destroy();
  }, [elementRef, navigationKeys, childQuery]);
}

function TabContainer(props) {
  const id = reactExports.useState(() => newId())[0], [activeTab, activeTabChanged, setActiveTab] = function(activeTab2, defaultTab) {
    const previousCurrentValueRef = reactExports.useRef(void 0), setActiveTab2 = reactExports.useCallback((newTab) => {
      activeTab2 && !activeTab2.readOnly && activeTab2.setValue(new Big(newTab + 1));
    }, [activeTab2?.readOnly, activeTab2?.setValue]);
    if (!activeTab2)
      return [defaultTab, false, () => {
      }];
    const currentValue = Math.max(activeTab2.value?.toNumber() ?? 0, 0), activeTabChanged2 = previousCurrentValueRef.current !== currentValue;
    activeTabChanged2 && (previousCurrentValueRef.current = currentValue);
    return [currentValue - 1, activeTabChanged2, setActiveTab2];
  }(props.activeTab, props.defaultTab), [selectedTabIndex, selectionHasChanged, setSelectedTabIndex] = function(tabs, activeTab2, activeTabChanged2, setActiveTab2) {
    const [selectedTabIndex2, setSelectedTabIndex2] = usePersistentState("selectedTab", activeTab2);
    let visibleTabToSelect = selectedTabIndex2 >= tabs.length ? -1 : selectedTabIndex2;
    if (-1 !== visibleTabToSelect) {
      for (; !isVisible(ensure(tabs[visibleTabToSelect])) && (visibleTabToSelect = (visibleTabToSelect + 1) % tabs.length, visibleTabToSelect !== selectedTabIndex2); )
        ;
      visibleTabToSelect !== selectedTabIndex2 && setSelectedTabIndex2(visibleTabToSelect);
    }
    const previousSelectionRef = reactExports.useRef(visibleTabToSelect), selectionHasChanged2 = previousSelectionRef.current !== visibleTabToSelect;
    previousSelectionRef.current = visibleTabToSelect, activeTabChanged2 && -1 !== activeTab2 && activeTab2 + 1 <= tabs.length && previousSelectionRef.current !== activeTab2 && selectTabIndex(activeTab2, false);
    const forceUpdate = useForceUpdate();
    function selectTabIndex(tabIndex, updateAttribute = true) {
      tabIndex === visibleTabToSelect ? (previousSelectionRef.current = -1, forceUpdate()) : (setSelectedTabIndex2(tabIndex), updateAttribute && setActiveTab2(tabIndex));
    }
    return tuple(visibleTabToSelect, selectionHasChanged2, selectTabIndex);
  }(props.tabs, activeTab, activeTabChanged, setActiveTab), tabsState = function(tabs, selectedTabIndex2, selectionHasChanged2) {
    const tabStateRef = reactExports.useRef(tabs.map((tab) => !tab.isDelayed && isVisible(tab) ? { key: 0 } : "hidden"));
    if (-1 !== selectedTabIndex2) {
      const selectedTabState = ensure(tabStateRef.current[selectedTabIndex2]);
      "hidden" === selectedTabState ? tabStateRef.current[selectedTabIndex2] = { key: 0 } : selectionHasChanged2 && ensure(tabs[selectedTabIndex2]).refreshOnShow && (selectedTabState.key += 1);
    }
    return tabStateRef.current;
  }(props.tabs, selectedTabIndex, selectionHasChanged), [invalidCounts, handleStore] = function(widgetName, length) {
    const [invalidCounts2, setInvalidCounts] = reactExports.useState(() => repeat(length, () => 0)), disposersRef = reactExports.useRef(repeat(length, () => {
    }));
    function handleStore2(store, index) {
      disposersRef.current[index]?.();
      const allInvalid$ = store.getAll$("isInvalid");
      disposersRef.current[index] = reaction(() => allInvalid$.dependOn().filter(Boolean).length, (invalidCount) => {
        setInvalidCounts((prevInvalidCounts) => {
          const newInvalidCounts = [...prevInvalidCounts];
          return newInvalidCounts[index] = invalidCount, newInvalidCounts;
        });
      }, { fireImmediately: false, name: `Validation of tab ${index} of ${widgetName}` });
    }
    return reactExports.useEffect(() => () => disposersRef.current.forEach((d) => d?.()), []), tuple(invalidCounts2, handleStore2);
  }(props.name, props.tabs.length), tabContainerNode = reactExports.useRef(null), tabListNode = reactExports.useRef(null), tabContentNode = reactExports.useRef(null);
  return useRovingTabIndex(tabListNode, NavigationKeys.LeftRight, reactExports.useCallback((element) => element.querySelectorAll("a"), [])), useLegacyResize(tabContainerNode, reactExports.useCallback(function(container) {
    const tabContent = ensure(tabContentNode.current);
    if (!container)
      return tabContent.style.height = "auto", void (tabContent.style.overflow = "");
    const parentBox = getBox(container), tabListBox = getBox(ensure(tabListNode.current)), remainder = parentBox.contentBox.height - tabListBox.marginBox.height;
    remainder > 100 ? (tabContent.style.height = `${remainder}px`, tabContent.style.overflow = "auto") : (tabContent.style.height = "auto", tabContent.style.overflow = "");
  }, [tabContentNode, tabListNode])), props.hoistedSelections?.forEach((s) => {
    const [value$, setValue] = useStoreBackendValue(s, "selection");
    setValue(readUntracked(value$));
  }), jsxRuntimeExports.jsxs("div", { className: classNames("mx-tabcontainer", props.class), style: props.style, "data-focusindex": props.tabIndex, ref: tabContainerNode, children: [jsxRuntimeExports.jsx("ul", { className: "nav nav-tabs mx-tabcontainer-tabs", role: "tablist", ref: tabListNode, children: props.tabs.map((tab, index) => isVisible(tab) ? jsxRuntimeExports.jsxs("li", { className: classNames({ active: selectedTabIndex === index }), role: "presentation", onClick: (e) => {
    setSelectedTabIndex(index), e.preventDefault();
  }, children: [jsxRuntimeExports.jsxs("a", { href: "#", className: `mx-name-${tab.name}`, id: `${id}-t${index}`, "aria-controls": `${id}-p${index}`, role: "tab", "aria-selected": selectedTabIndex === index, children: [tab.caption.value, tab.badge && jsxRuntimeExports.jsx("span", { className: "mx-tabcontainer-badge", style: { display: tab.badge.value ? "inline-block" : "none" }, children: tab.badge.value })] }), ensure(invalidCounts[index]) > 0 && jsxRuntimeExports.jsx("span", { className: "mx-tabcontainer-indicator", children: invalidCounts[index] })] }, index) : void 0) }), jsxRuntimeExports.jsx("div", { className: "tab-content mx-tabcontainer-content", "data-focusindex": "0", ref: tabContentNode, children: props.tabs.map((tab, index) => {
    const tabState = ensure(tabsState[index]);
    return jsxRuntimeExports.jsx("div", { className: classNames("tab-pane mx-tabcontainer-pane", { active: selectedTabIndex === index }), style: isVisible(tab) ? void 0 : { display: "none" }, id: `${id}-p${index}`, role: "tabpanel", "aria-labelledby": `${id}-t${index}`, children: jsxRuntimeExports.jsx(NestedStoreProvider, { namespace: `${props.widgetId}.${index}`, setupStore: reactExports.useCallback((store) => handleStore(store, index), []), children: "hidden" !== tabState ? jsxRuntimeExports.jsx(PageFragment, { renderKey: tabState.key, children: tab.content }) : null }) }, index);
  }) })] });
}
function isVisible(tab) {
  return !tab.isVisible || "loading" === tab.isVisible.status && void 0 === tab.isVisible.value || Boolean(tab.isVisible.value);
}

const React = { createElement: reactExports.createElement };
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;
const DatagridDateFilter = Object.getOwnPropertyDescriptor(DatagridDateFilterWidgetModule, "DatagridDateFilter")?.value || Object.getOwnPropertyDescriptor(DatagridDateFilterWidgetModule, "default")?.value;
const DatagridDropdownFilter = Object.getOwnPropertyDescriptor(DatagridDropdownFilterWidgetModule, "DatagridDropdownFilter")?.value || Object.getOwnPropertyDescriptor(DatagridDropdownFilterWidgetModule, "default")?.value;
const DatagridTextFilter = Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "DatagridTextFilter")?.value || Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "default")?.value;
const { $Container, $Div, $Text, $TabContainer, $Datagrid, $DatagridTextFilter, $ListView, $DatagridDropdownFilter, $DatagridDateFilter, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Container, Div, Text, TabContainer, Datagrid, DatagridTextFilter, ListView, DatagridDropdownFilter, DatagridDateFilter, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Container,
    {
      key: "p3.Administration.Account_Overview.container1",
      $widgetId: "p3.Administration.Account_Overview.container1",
      class: "mx-name-container1 pageheader pageheader-fullwidth",
      style: void 0,
      renderMode: "div",
      onClick: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p3.Administration.Account_Overview.layoutGrid1",
            $widgetId: "p3.Administration.Account_Overview.layoutGrid1",
            class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p3.Administration.Account_Overview.layoutGrid1$row0",
                  $widgetId: "p3.Administration.Account_Overview.layoutGrid1$row0",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p3.Administration.Account_Overview.layoutGrid1$row0$column0",
                        $widgetId: "p3.Administration.Account_Overview.layoutGrid1$row0$column0",
                        class: "col-lg-12 col-md-12 col-12",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p3.Administration.Account_Overview.label1",
                              $widgetId: "p3.Administration.Account_Overview.label1",
                              class: "mx-name-label1 pageheader-title",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Account Overview" }, "args": {} }
                                })
                              ]),
                              renderMode: "h2"
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p3.Administration.Account_Overview.label2",
                              $widgetId: "p3.Administration.Account_Overview.label2",
                              class: "mx-name-label2 pageheader-subtitle",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "These are the local users of your app. Please note that only these users should be managed in this app. MendixSSO users are provisioned by the MendixSSO module and should be managed from the App User Management screen (Developer Portal > General Settings > Manage App Users)." }, "args": {} }
                                })
                              ]),
                              renderMode: "h4"
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ],
      ariaHidden: false
    }
  ),
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p3.Administration.Account_Overview.layoutGrid4",
      $widgetId: "p3.Administration.Account_Overview.layoutGrid4",
      class: "mx-name-layoutGrid4 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p3.Administration.Account_Overview.layoutGrid4$row0",
            $widgetId: "p3.Administration.Account_Overview.layoutGrid4$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p3.Administration.Account_Overview.layoutGrid4$row0$column0",
                  $widgetId: "p3.Administration.Account_Overview.layoutGrid4$row0$column0",
                  class: "col-lg-12 col-md-12 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $TabContainer,
                      {
                        key: "p3.Administration.Account_Overview.tabControl",
                        $widgetId: "p3.Administration.Account_Overview.tabControl",
                        class: "mx-name-tabControl tabsfullwidth",
                        style: void 0,
                        tabIndex: void 0,
                        widgetId: "p3.Administration.Account_Overview.tabControl",
                        defaultTab: 0,
                        tabs: [
                          {
                            "name": "tabPage2",
                            "caption": TextProperty({
                              "value": selectTranslation([
                                "Local Users"
                              ])
                            }),
                            "isDelayed": false,
                            "refreshOnShow": false,
                            "content": [
                              /* @__PURE__ */ React.createElement(
                                $Datagrid,
                                {
                                  key: "p3.Administration.Account_Overview.dataGrid21",
                                  $widgetId: "p3.Administration.Account_Overview.dataGrid21",
                                  advanced: false,
                                  datasource: DatabaseObjectListProperty({
                                    "dataSourceId": "p3.14",
                                    "entity": "Administration.Account",
                                    "operationId": "t/i+r6erO1C+prCnvdMFbA",
                                    "sort": [
                                      [
                                        "FullName",
                                        "asc"
                                      ]
                                    ],
                                    "constraints": { "type": "function", "name": "and", "parameters": [{ "type": "function", "name": "or", "parameters": [{ "type": "relatedEntity", "left": { "type": "attribute", "attribute": "id", "context": "Administration.Account", "attributeType": "ObjectReference" }, "rightEntity": "System.UserRole", "rightEntityAlias": "System.UserRole", "right": { "type": "attribute", "attribute": "System.UserRoles", "context": "System.UserRole", "attributeType": "ObjectReference" }, "next": { "type": "relatedEntity", "left": { "type": "attribute", "attribute": "id", "context": "System.UserRole", "attributeType": "ObjectReference" }, "rightEntity": "System.UserRole", "rightEntityAlias": "System.UserRole1", "right": { "type": "attribute", "attribute": "System.grantableRoles", "context": "System.UserRole1", "attributeType": "ObjectReference" }, "next": { "type": "relatedEntity", "left": { "type": "attribute", "attribute": "id", "context": "System.UserRole1", "attributeType": "ObjectReference" }, "rightEntity": "System.User", "rightEntityAlias": "System.User", "right": { "type": "attribute", "attribute": "System.UserRoles", "context": "System.User", "attributeType": "ObjectReference" }, "next": { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "id", "context": "System.User", "attributeType": "ObjectReference" }, { "type": "token", "name": "currentUser" }] } } } }, { "type": "function", "name": "not", "parameters": [{ "type": "relatedEntity", "left": { "type": "attribute", "attribute": "id", "context": "Administration.Account", "attributeType": "ObjectReference" }, "rightEntity": "System.UserRole", "rightEntityAlias": "System.UserRole2", "right": { "type": "attribute", "attribute": "System.UserRoles", "context": "System.UserRole2", "attributeType": "ObjectReference" }, "next": { "type": "attribute", "attribute": "id", "context": "System.UserRole2", "attributeType": "ObjectReference" } }] }] }, { "type": "function", "name": "!=", "parameters": [{ "type": "attribute", "attribute": "Name", "context": "Administration.Account", "attributeType": "String" }, { "type": "literal", "value": null }] }] }
                                  }),
                                  refreshInterval: 0,
                                  itemSelectionMethod: "checkbox",
                                  showSelectAllToggle: true,
                                  columns: [
                                    {
                                      "showContentAs": "attribute",
                                      "attribute": ListAttributeProperty({
                                        "path": "",
                                        "entity": "Administration.Account",
                                        "attribute": "FullName",
                                        "attributeType": "String",
                                        "sortable": true,
                                        "filterable": true,
                                        "dataSourceId": "p3.14",
                                        "isList": false
                                      }),
                                      "content": void 0,
                                      "dynamicText": selectTranslation([
                                        void 0
                                      ]),
                                      "header": selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": "Full name" }, "args": {} }
                                        })
                                      ]),
                                      "tooltip": selectTranslation([
                                        void 0
                                      ]),
                                      "filter": [
                                        /* @__PURE__ */ React.createElement(
                                          $DatagridTextFilter,
                                          {
                                            key: "p3.Administration.Account_Overview.textFilter1",
                                            $widgetId: "p3.Administration.Account_Overview.textFilter1",
                                            advanced: false,
                                            defaultValue: void 0,
                                            defaultFilter: "contains",
                                            placeholder: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            adjustable: true,
                                            delay: 500,
                                            onChange: void 0,
                                            screenReaderButtonCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            screenReaderInputCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            class: "mx-name-textFilter1",
                                            style: void 0,
                                            tabIndex: void 0
                                          }
                                        )
                                      ],
                                      "visible": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                      }),
                                      "sortable": true,
                                      "resizable": true,
                                      "draggable": true,
                                      "hidable": "yes",
                                      "width": "autoFill",
                                      "size": 1,
                                      "alignment": "left",
                                      "wrapText": false,
                                      "minWidth": "auto",
                                      "minWidthLimit": 100,
                                      "exportValue": selectTranslation([
                                        void 0
                                      ]),
                                      "fetchOptionsLazy": true,
                                      "filterCaptionType": "expression",
                                      "allowEventPropagation": true
                                    },
                                    {
                                      "showContentAs": "attribute",
                                      "attribute": ListAttributeProperty({
                                        "path": "",
                                        "entity": "Administration.Account",
                                        "attribute": "Name",
                                        "attributeType": "String",
                                        "sortable": true,
                                        "filterable": true,
                                        "dataSourceId": "p3.14",
                                        "isList": false
                                      }),
                                      "content": void 0,
                                      "dynamicText": selectTranslation([
                                        void 0
                                      ]),
                                      "header": selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": "Login" }, "args": {} }
                                        })
                                      ]),
                                      "tooltip": selectTranslation([
                                        void 0
                                      ]),
                                      "filter": [
                                        /* @__PURE__ */ React.createElement(
                                          $DatagridTextFilter,
                                          {
                                            key: "p3.Administration.Account_Overview.textFilter2",
                                            $widgetId: "p3.Administration.Account_Overview.textFilter2",
                                            advanced: false,
                                            defaultValue: void 0,
                                            defaultFilter: "contains",
                                            placeholder: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            adjustable: true,
                                            delay: 500,
                                            onChange: void 0,
                                            screenReaderButtonCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            screenReaderInputCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            class: "mx-name-textFilter2",
                                            style: void 0,
                                            tabIndex: void 0
                                          }
                                        )
                                      ],
                                      "visible": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                      }),
                                      "sortable": true,
                                      "resizable": true,
                                      "draggable": true,
                                      "hidable": "yes",
                                      "width": "autoFill",
                                      "size": 1,
                                      "alignment": "left",
                                      "wrapText": false,
                                      "minWidth": "auto",
                                      "minWidthLimit": 100,
                                      "exportValue": selectTranslation([
                                        void 0
                                      ]),
                                      "fetchOptionsLazy": true,
                                      "filterCaptionType": "expression",
                                      "allowEventPropagation": true
                                    },
                                    {
                                      "showContentAs": "customContent",
                                      "content": TemplatedWidgetProperty({
                                        "dataSourceId": "p3.14",
                                        "editable": false,
                                        "children": () => [
                                          /* @__PURE__ */ React.createElement(
                                            $ListView,
                                            {
                                              key: "p3.Administration.Account_Overview.listView1",
                                              $widgetId: "p3.Administration.Account_Overview.listView1",
                                              class: "mx-name-listView1 mx-administration-lv-dg-list listview-stylingless",
                                              style: void 0,
                                              listValue: AssociationObjectListProperty({
                                                "dataSourceId": "p3.15",
                                                "entity": "System.UserRole",
                                                "scope": "p3.Administration.Account_Overview.dataGrid21",
                                                "operationId": "JFwpqKf65FKWqTsdcV+f1g",
                                                "directPath": "System.UserRoles/System.UserRole"
                                              }),
                                              itemTemplate: TemplatedWidgetProperty({
                                                "dataSourceId": "p3.15",
                                                "editable": false,
                                                "children": () => [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p3.Administration.Account_Overview.text1",
                                                      $widgetId: "p3.Administration.Account_Overview.text1",
                                                      class: "mx-name-text1",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p3.Administration.Account_Overview.listView1", "source": "object" } } }
                                                        })
                                                      ]),
                                                      renderMode: "span"
                                                    }
                                                  )
                                                ]
                                              }),
                                              onClick: void 0,
                                              pageSize: 5
                                            }
                                          )
                                        ]
                                      }),
                                      "dynamicText": selectTranslation([
                                        void 0
                                      ]),
                                      "header": selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": "Roles" }, "args": {} }
                                        })
                                      ]),
                                      "tooltip": selectTranslation([
                                        void 0
                                      ]),
                                      "filter": [
                                        /* @__PURE__ */ React.createElement(
                                          $DatagridDropdownFilter,
                                          {
                                            key: "p3.Administration.Account_Overview.drop_downFilter1",
                                            $widgetId: "p3.Administration.Account_Overview.drop_downFilter1",
                                            auto: true,
                                            defaultValue: void 0,
                                            filterOptions: [],
                                            emptyOptionCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            multiSelect: true,
                                            onChange: void 0,
                                            ariaLabel: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            filterable: false,
                                            clearable: true,
                                            selectedItemsStyle: "text",
                                            selectionMethod: "checkbox",
                                            class: "mx-name-drop_downFilter1",
                                            style: void 0,
                                            tabIndex: void 0
                                          }
                                        )
                                      ],
                                      "filterAssociation": ListAssociationProperty({
                                        "type": "ReferenceSet",
                                        "entity": void 0,
                                        "path": "",
                                        "attribute": "System.UserRoles",
                                        "endpointEntity": "System.UserRole",
                                        "selectableObjectsId": "p3.16",
                                        "filterable": true,
                                        "dataSourceId": "p3.14"
                                      }),
                                      "filterAssociationOptions": DatabaseObjectListProperty({
                                        "dataSourceId": "p3.16",
                                        "entity": "System.UserRole",
                                        "operationId": "a7pqDiCx2ly1vH/FSx5o+w",
                                        "sort": [
                                          [
                                            "Name",
                                            "asc"
                                          ]
                                        ]
                                      }),
                                      "filterAssociationOptionLabel": ListExpressionProperty({
                                        "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p3.Administration.Account_Overview.dataGrid21", "source": "object" } } },
                                        "dataSourceId": "p3.16"
                                      }),
                                      "visible": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                      }),
                                      "sortable": false,
                                      "resizable": true,
                                      "draggable": true,
                                      "hidable": "yes",
                                      "width": "autoFill",
                                      "size": 1,
                                      "alignment": "left",
                                      "wrapText": false,
                                      "minWidth": "auto",
                                      "minWidthLimit": 100,
                                      "exportValue": selectTranslation([
                                        void 0
                                      ]),
                                      "fetchOptionsLazy": true,
                                      "filterCaptionType": "expression",
                                      "allowEventPropagation": true
                                    },
                                    {
                                      "showContentAs": "dynamicText",
                                      "attribute": ListAttributeProperty({
                                        "path": "",
                                        "entity": "Administration.Account",
                                        "attribute": "LastLogin",
                                        "attributeType": "DateTime",
                                        "sortable": true,
                                        "filterable": true,
                                        "dataSourceId": "p3.14",
                                        "isList": false
                                      }),
                                      "content": void 0,
                                      "dynamicText": selectTranslation([
                                        ListExpressionProperty({
                                          "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "LastLogin" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "currentObject": { "widget": "p3.Administration.Account_Overview.dataGrid21", "source": "object" } } },
                                          "dataSourceId": "p3.14"
                                        })
                                      ]),
                                      "header": selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": "Last login" }, "args": {} }
                                        })
                                      ]),
                                      "tooltip": selectTranslation([
                                        void 0
                                      ]),
                                      "filter": [
                                        /* @__PURE__ */ React.createElement(
                                          $DatagridDateFilter,
                                          {
                                            key: "p3.Administration.Account_Overview.dateFilter1",
                                            $widgetId: "p3.Administration.Account_Overview.dateFilter1",
                                            advanced: false,
                                            defaultValue: void 0,
                                            defaultStartDate: void 0,
                                            defaultEndDate: void 0,
                                            defaultFilter: "equal",
                                            placeholder: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            adjustable: true,
                                            onChange: void 0,
                                            screenReaderButtonCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            screenReaderCalendarCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            screenReaderInputCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            class: "mx-name-dateFilter1",
                                            style: void 0,
                                            tabIndex: void 0
                                          }
                                        )
                                      ],
                                      "visible": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                      }),
                                      "sortable": true,
                                      "resizable": true,
                                      "draggable": true,
                                      "hidable": "yes",
                                      "width": "autoFill",
                                      "size": 1,
                                      "alignment": "left",
                                      "wrapText": false,
                                      "minWidth": "auto",
                                      "minWidthLimit": 100,
                                      "exportValue": selectTranslation([
                                        void 0
                                      ]),
                                      "fetchOptionsLazy": true,
                                      "filterCaptionType": "expression",
                                      "allowEventPropagation": true
                                    },
                                    {
                                      "showContentAs": "customContent",
                                      "attribute": ListAttributeProperty({
                                        "path": "",
                                        "entity": "Administration.Account",
                                        "attribute": "Active",
                                        "attributeType": "Boolean",
                                        "sortable": true,
                                        "filterable": true,
                                        "dataSourceId": "p3.14",
                                        "isList": false
                                      }),
                                      "content": TemplatedWidgetProperty({
                                        "dataSourceId": "p3.14",
                                        "editable": false,
                                        "children": () => [
                                          /* @__PURE__ */ React.createElement(
                                            $ConditionalVisibilityWrapper,
                                            {
                                              key: "p3.Administration.Account_Overview.text2$visibility",
                                              $widgetId: "p3.Administration.Account_Overview.text2$visibility",
                                              visible: ExpressionProperty({
                                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Active" }, "args": { "currentObject": { "widget": "p3.Administration.Account_Overview.dataGrid21", "source": "object" } } }
                                              }),
                                              contents: [
                                                /* @__PURE__ */ React.createElement(
                                                  $Text,
                                                  {
                                                    key: "p3.Administration.Account_Overview.text2",
                                                    $widgetId: "p3.Administration.Account_Overview.text2",
                                                    class: "mx-name-text2 badge label-success",
                                                    style: void 0,
                                                    caption: selectTranslation([
                                                      ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Active" }, "args": {} }
                                                      })
                                                    ]),
                                                    renderMode: "span"
                                                  }
                                                )
                                              ]
                                            }
                                          ),
                                          /* @__PURE__ */ React.createElement(
                                            $ConditionalVisibilityWrapper,
                                            {
                                              key: "p3.Administration.Account_Overview.text3$visibility",
                                              $widgetId: "p3.Administration.Account_Overview.text3$visibility",
                                              visible: ExpressionProperty({
                                                "expression": { "expr": { "type": "function", "name": "not", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Active" }] }, "args": { "currentObject": { "widget": "p3.Administration.Account_Overview.dataGrid21", "source": "object" } } }
                                              }),
                                              contents: [
                                                /* @__PURE__ */ React.createElement(
                                                  $Text,
                                                  {
                                                    key: "p3.Administration.Account_Overview.text3",
                                                    $widgetId: "p3.Administration.Account_Overview.text3",
                                                    class: "mx-name-text3 badge label-secondary",
                                                    style: void 0,
                                                    caption: selectTranslation([
                                                      ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Inactive" }, "args": {} }
                                                      })
                                                    ]),
                                                    renderMode: "span"
                                                  }
                                                )
                                              ]
                                            }
                                          )
                                        ]
                                      }),
                                      "dynamicText": selectTranslation([
                                        void 0
                                      ]),
                                      "header": selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": "Active" }, "args": {} }
                                        })
                                      ]),
                                      "tooltip": selectTranslation([
                                        void 0
                                      ]),
                                      "filter": [
                                        /* @__PURE__ */ React.createElement(
                                          $DatagridDropdownFilter,
                                          {
                                            key: "p3.Administration.Account_Overview.drop_downFilter2",
                                            $widgetId: "p3.Administration.Account_Overview.drop_downFilter2",
                                            auto: true,
                                            defaultValue: void 0,
                                            filterOptions: [],
                                            emptyOptionCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            multiSelect: false,
                                            onChange: void 0,
                                            ariaLabel: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            filterable: false,
                                            clearable: true,
                                            selectedItemsStyle: "text",
                                            selectionMethod: "checkbox",
                                            class: "mx-name-drop_downFilter2",
                                            style: void 0,
                                            tabIndex: void 0
                                          }
                                        )
                                      ],
                                      "visible": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                      }),
                                      "sortable": true,
                                      "resizable": true,
                                      "draggable": true,
                                      "hidable": "yes",
                                      "width": "autoFill",
                                      "size": 1,
                                      "alignment": "left",
                                      "wrapText": false,
                                      "minWidth": "auto",
                                      "minWidthLimit": 100,
                                      "exportValue": selectTranslation([
                                        void 0
                                      ]),
                                      "fetchOptionsLazy": true,
                                      "filterCaptionType": "expression",
                                      "allowEventPropagation": true
                                    },
                                    {
                                      "showContentAs": "attribute",
                                      "attribute": ListAttributeProperty({
                                        "path": "",
                                        "entity": "Administration.Account",
                                        "attribute": "WebServiceUser",
                                        "attributeType": "Boolean",
                                        "sortable": true,
                                        "filterable": true,
                                        "dataSourceId": "p3.14",
                                        "isList": false
                                      }),
                                      "content": void 0,
                                      "dynamicText": selectTranslation([
                                        void 0
                                      ]),
                                      "header": selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": "Web service user" }, "args": {} }
                                        })
                                      ]),
                                      "tooltip": selectTranslation([
                                        void 0
                                      ]),
                                      "filter": [
                                        /* @__PURE__ */ React.createElement(
                                          $DatagridDropdownFilter,
                                          {
                                            key: "p3.Administration.Account_Overview.drop_downFilter3",
                                            $widgetId: "p3.Administration.Account_Overview.drop_downFilter3",
                                            auto: true,
                                            defaultValue: void 0,
                                            filterOptions: [],
                                            emptyOptionCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            multiSelect: false,
                                            onChange: void 0,
                                            ariaLabel: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            filterable: false,
                                            clearable: true,
                                            selectedItemsStyle: "text",
                                            selectionMethod: "checkbox",
                                            class: "mx-name-drop_downFilter3",
                                            style: void 0,
                                            tabIndex: void 0
                                          }
                                        )
                                      ],
                                      "visible": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                      }),
                                      "sortable": true,
                                      "resizable": true,
                                      "draggable": true,
                                      "hidable": "yes",
                                      "width": "autoFill",
                                      "size": 1,
                                      "alignment": "left",
                                      "wrapText": false,
                                      "minWidth": "auto",
                                      "minWidthLimit": 100,
                                      "exportValue": selectTranslation([
                                        void 0
                                      ]),
                                      "fetchOptionsLazy": true,
                                      "filterCaptionType": "expression",
                                      "allowEventPropagation": true
                                    },
                                    {
                                      "showContentAs": "attribute",
                                      "attribute": ListAttributeProperty({
                                        "path": "",
                                        "entity": "Administration.Account",
                                        "attribute": "IsLocalUser",
                                        "attributeType": "Boolean",
                                        "sortable": true,
                                        "filterable": true,
                                        "dataSourceId": "p3.14",
                                        "isList": false
                                      }),
                                      "content": void 0,
                                      "dynamicText": selectTranslation([
                                        void 0
                                      ]),
                                      "header": selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": "Local" }, "args": {} }
                                        })
                                      ]),
                                      "tooltip": selectTranslation([
                                        void 0
                                      ]),
                                      "filter": [
                                        /* @__PURE__ */ React.createElement(
                                          $DatagridDropdownFilter,
                                          {
                                            key: "p3.Administration.Account_Overview.drop_downFilter4",
                                            $widgetId: "p3.Administration.Account_Overview.drop_downFilter4",
                                            auto: true,
                                            defaultValue: void 0,
                                            filterOptions: [],
                                            emptyOptionCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            multiSelect: false,
                                            onChange: void 0,
                                            ariaLabel: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            filterable: false,
                                            clearable: true,
                                            selectedItemsStyle: "text",
                                            selectionMethod: "checkbox",
                                            class: "mx-name-drop_downFilter4",
                                            style: void 0,
                                            tabIndex: void 0
                                          }
                                        )
                                      ],
                                      "visible": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                      }),
                                      "sortable": true,
                                      "resizable": true,
                                      "draggable": true,
                                      "hidable": "yes",
                                      "width": "autoFill",
                                      "size": 1,
                                      "alignment": "left",
                                      "wrapText": false,
                                      "minWidth": "auto",
                                      "minWidthLimit": 100,
                                      "exportValue": selectTranslation([
                                        void 0
                                      ]),
                                      "fetchOptionsLazy": true,
                                      "filterCaptionType": "expression",
                                      "allowEventPropagation": true
                                    },
                                    {
                                      "showContentAs": "customContent",
                                      "attribute": ListAttributeProperty({
                                        "path": "",
                                        "entity": "Administration.Account",
                                        "attribute": "FullName",
                                        "attributeType": "String",
                                        "sortable": true,
                                        "filterable": true,
                                        "dataSourceId": "p3.14",
                                        "isList": false
                                      }),
                                      "content": TemplatedWidgetProperty({
                                        "dataSourceId": "p3.14",
                                        "editable": false,
                                        "children": () => [
                                          /* @__PURE__ */ React.createElement(
                                            $ConditionalVisibilityWrapper,
                                            {
                                              key: "p3.Administration.Account_Overview.actionButton3$visibility",
                                              $widgetId: "p3.Administration.Account_Overview.actionButton3$visibility",
                                              visible: ExpressionProperty({
                                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                              }),
                                              contents: [
                                                /* @__PURE__ */ React.createElement(
                                                  $ActionButton,
                                                  {
                                                    key: "p3.Administration.Account_Overview.actionButton3",
                                                    $widgetId: "p3.Administration.Account_Overview.actionButton3",
                                                    buttonId: "p3.Administration.Account_Overview.actionButton3",
                                                    class: "mx-name-actionButton3 btn-lg",
                                                    style: void 0,
                                                    tabIndex: void 0,
                                                    renderType: "link",
                                                    role: "button",
                                                    buttonClass: "btn-default",
                                                    caption: selectTranslation([
                                                      ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                      })
                                                    ]),
                                                    tooltip: TextProperty({
                                                      "value": selectTranslation([
                                                        ""
                                                      ])
                                                    }),
                                                    icon: WebIconProperty({
                                                      "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-pencil" }
                                                    }),
                                                    action: ActionProperty({
                                                      "action": { "type": "openPage", "argMap": { "param$Account": { "widget": "p3.Administration.Account_Overview.dataGrid21", "source": "object" } }, "config": { "name": "Administration/Account_Edit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                      "abortOnServerValidation": true
                                                    })
                                                  }
                                                )
                                              ]
                                            }
                                          ),
                                          /* @__PURE__ */ React.createElement(
                                            $ConditionalVisibilityWrapper,
                                            {
                                              key: "p3.Administration.Account_Overview.actionButton4$visibility",
                                              $widgetId: "p3.Administration.Account_Overview.actionButton4$visibility",
                                              visible: ExpressionProperty({
                                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                              }),
                                              contents: [
                                                /* @__PURE__ */ React.createElement(
                                                  $ActionButton,
                                                  {
                                                    key: "p3.Administration.Account_Overview.actionButton4",
                                                    $widgetId: "p3.Administration.Account_Overview.actionButton4",
                                                    buttonId: "p3.Administration.Account_Overview.actionButton4",
                                                    class: "mx-name-actionButton4 btn-lg spacing-outer-left-medium",
                                                    style: void 0,
                                                    tabIndex: void 0,
                                                    renderType: "link",
                                                    role: "button",
                                                    buttonClass: "btn-default",
                                                    caption: selectTranslation([
                                                      ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                      })
                                                    ]),
                                                    tooltip: TextProperty({
                                                      "value": selectTranslation([
                                                        ""
                                                      ])
                                                    }),
                                                    icon: WebIconProperty({
                                                      "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-trash-can" }
                                                    }),
                                                    action: ActionProperty({
                                                      "action": { "type": "deleteObject", "argMap": { "$object": { "widget": "p3.Administration.Account_Overview.dataGrid21", "source": "object" } }, "config": { "closePage": false, "operationId": "EqLrpKXFKVKgV9hR236pyg" }, "disabledDuringExecution": true },
                                                      "abortOnServerValidation": true
                                                    })
                                                  }
                                                )
                                              ]
                                            }
                                          )
                                        ]
                                      }),
                                      "dynamicText": selectTranslation([
                                        void 0
                                      ]),
                                      "header": selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": " " }, "args": {} }
                                        })
                                      ]),
                                      "tooltip": selectTranslation([
                                        void 0
                                      ]),
                                      "filter": void 0,
                                      "visible": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                      }),
                                      "sortable": false,
                                      "resizable": true,
                                      "draggable": true,
                                      "hidable": "no",
                                      "width": "autoFit",
                                      "size": 1,
                                      "alignment": "left",
                                      "wrapText": false,
                                      "minWidth": "auto",
                                      "minWidthLimit": 100,
                                      "exportValue": selectTranslation([
                                        void 0
                                      ]),
                                      "fetchOptionsLazy": true,
                                      "filterCaptionType": "expression",
                                      "allowEventPropagation": true
                                    }
                                  ],
                                  columnsFilterable: true,
                                  pageSize: 20,
                                  pagination: "buttons",
                                  pagingPosition: "bottom",
                                  showPagingButtons: "always",
                                  showEmptyPlaceholder: "none",
                                  emptyPlaceholder: void 0,
                                  rowClass: void 0,
                                  onClick: void 0,
                                  onSelectionChange: void 0,
                                  columnsSortable: true,
                                  columnsResizable: true,
                                  columnsDraggable: true,
                                  columnsHidable: true,
                                  filterList: [],
                                  filtersPlaceholder: [
                                    /* @__PURE__ */ React.createElement(
                                      $ConditionalVisibilityWrapper,
                                      {
                                        key: "p3.Administration.Account_Overview.actionButton1$visibility",
                                        $widgetId: "p3.Administration.Account_Overview.actionButton1$visibility",
                                        visible: ExpressionProperty({
                                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                        }),
                                        contents: [
                                          /* @__PURE__ */ React.createElement(
                                            $ActionButton,
                                            {
                                              key: "p3.Administration.Account_Overview.actionButton1",
                                              $widgetId: "p3.Administration.Account_Overview.actionButton1",
                                              buttonId: "p3.Administration.Account_Overview.actionButton1",
                                              class: "mx-name-actionButton1 spacing-outer-bottom",
                                              style: void 0,
                                              tabIndex: void 0,
                                              renderType: "button",
                                              role: void 0,
                                              buttonClass: "btn-success",
                                              caption: selectTranslation([
                                                ExpressionProperty({
                                                  "expression": { "expr": { "type": "literal", "value": "New local user" }, "args": {} }
                                                })
                                              ]),
                                              tooltip: TextProperty({
                                                "value": selectTranslation([
                                                  ""
                                                ])
                                              }),
                                              icon: void 0,
                                              action: ActionProperty({
                                                "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "KglVsdcm2Vaj5RzJ8ceVSw", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                "abortOnServerValidation": true
                                              })
                                            }
                                          )
                                        ]
                                      }
                                    ),
                                    /* @__PURE__ */ React.createElement(
                                      $ConditionalVisibilityWrapper,
                                      {
                                        key: "p3.Administration.Account_Overview.actionButton2$visibility",
                                        $widgetId: "p3.Administration.Account_Overview.actionButton2$visibility",
                                        visible: ExpressionProperty({
                                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                        }),
                                        contents: [
                                          /* @__PURE__ */ React.createElement(
                                            $ActionButton,
                                            {
                                              key: "p3.Administration.Account_Overview.actionButton2",
                                              $widgetId: "p3.Administration.Account_Overview.actionButton2",
                                              buttonId: "p3.Administration.Account_Overview.actionButton2",
                                              class: "mx-name-actionButton2 spacing-outer-left spacing-outer-bottom",
                                              style: void 0,
                                              tabIndex: void 0,
                                              renderType: "button",
                                              role: void 0,
                                              buttonClass: "btn-default",
                                              caption: selectTranslation([
                                                ExpressionProperty({
                                                  "expression": { "expr": { "type": "literal", "value": "New web service user" }, "args": {} }
                                                })
                                              ]),
                                              tooltip: TextProperty({
                                                "value": selectTranslation([
                                                  ""
                                                ])
                                              }),
                                              icon: void 0,
                                              action: ActionProperty({
                                                "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "43DaBWrBRFK20ghgRVGzWA", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                "abortOnServerValidation": true
                                              })
                                            }
                                          )
                                        ]
                                      }
                                    )
                                  ],
                                  filterSectionTitle: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                  ]),
                                  exportDialogLabel: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Export progress" }, "args": {} }
                                    })
                                  ]),
                                  cancelExportLabel: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Cancel data export" }, "args": {} }
                                    })
                                  ]),
                                  selectRowLabel: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Select row" }, "args": {} }
                                    })
                                  ]),
                                  onClickTrigger: "single",
                                  itemSelectionMode: "clear",
                                  loadingType: "spinner",
                                  showNumberOfRows: false,
                                  loadMoreButtonCaption: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Load More" }, "args": {} }
                                    })
                                  ]),
                                  configurationStorageType: "attribute",
                                  storeFiltersInPersonalization: true,
                                  class: "mx-name-dataGrid21 table-hover",
                                  style: void 0,
                                  tabIndex: void 0
                                }
                              )
                            ]
                          }
                        ]
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  )
]);
const title = selectTranslation([
  "Accounts"
]);
const classes = "layout-atlas layout-atlas-responsive-default page-tabs page-tabs-fullwidth";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_Default.Main": region$Main
};

export { classes, content, style, title };
