// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package system.proxies;

/**
 * Information about Scheduled Events.
 */
public class ScheduledEventInformation implements com.mendix.systemwideinterfaces.core.IEntityProxy
{
	private final com.mendix.systemwideinterfaces.core.IMendixObject scheduledEventInformationMendixObject;

	private final com.mendix.systemwideinterfaces.core.IContext context;

	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "System.ScheduledEventInformation";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		Name("Name"),
		Description("Description"),
		StartTime("StartTime"),
		EndTime("EndTime"),
		Status("Status"),
		ScheduledEventInformation_XASInstance("System.ScheduledEventInformation_XASInstance");

		private final java.lang.String metaName;

		MemberNames(java.lang.String s)
		{
			metaName = s;
		}

		@java.lang.Override
		public java.lang.String toString()
		{
			return metaName;
		}
	}

	public ScheduledEventInformation(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, entityName));
	}

	protected ScheduledEventInformation(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject scheduledEventInformationMendixObject)
	{
		if (scheduledEventInformationMendixObject == null) {
			throw new java.lang.IllegalArgumentException("The given object cannot be null.");
		}
		if (!scheduledEventInformationMendixObject.isInstanceOf(entityName)) {
			throw new java.lang.IllegalArgumentException(String.format("The given object is not a %s", entityName));
		}	

		this.scheduledEventInformationMendixObject = scheduledEventInformationMendixObject;
		this.context = context;
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 * @param context The context to be used
	 * @param mendixObject The Mendix object for the new instance
	 * @return a new instance of this proxy class
	 */
	public static system.proxies.ScheduledEventInformation initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		return new system.proxies.ScheduledEventInformation(context, mendixObject);
	}

	public static system.proxies.ScheduledEventInformation load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return system.proxies.ScheduledEventInformation.initialize(context, mendixObject);
	}

	public static java.util.List<system.proxies.ScheduledEventInformation> load(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String xpathConstraint) throws com.mendix.core.CoreException
	{
		return com.mendix.core.Core.createXPathQuery(String.format("//%1$s%2$s", entityName, xpathConstraint))
			.execute(context)
			.stream()
			.map(obj -> system.proxies.ScheduledEventInformation.initialize(context, obj))
			.collect(java.util.stream.Collectors.toList());
	}

	/**
	 * @return value of Name
	 */
	public final java.lang.String getName()
	{
		return getName(getContext());
	}

	/**
	 * @param context
	 * @return value of Name
	 */
	public final java.lang.String getName(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Name.toString());
	}

	/**
	 * Set value of Name
	 * @param name
	 */
	public final void setName(java.lang.String name)
	{
		setName(getContext(), name);
	}

	/**
	 * Set value of Name
	 * @param context
	 * @param name
	 */
	public final void setName(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String name)
	{
		getMendixObject().setValue(context, MemberNames.Name.toString(), name);
	}

	/**
	 * @return value of Description
	 */
	public final java.lang.String getDescription()
	{
		return getDescription(getContext());
	}

	/**
	 * @param context
	 * @return value of Description
	 */
	public final java.lang.String getDescription(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Description.toString());
	}

	/**
	 * Set value of Description
	 * @param description
	 */
	public final void setDescription(java.lang.String description)
	{
		setDescription(getContext(), description);
	}

	/**
	 * Set value of Description
	 * @param context
	 * @param description
	 */
	public final void setDescription(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String description)
	{
		getMendixObject().setValue(context, MemberNames.Description.toString(), description);
	}

	/**
	 * @return value of StartTime
	 */
	public final java.util.Date getStartTime()
	{
		return getStartTime(getContext());
	}

	/**
	 * @param context
	 * @return value of StartTime
	 */
	public final java.util.Date getStartTime(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.util.Date) getMendixObject().getValue(context, MemberNames.StartTime.toString());
	}

	/**
	 * Set value of StartTime
	 * @param starttime
	 */
	public final void setStartTime(java.util.Date starttime)
	{
		setStartTime(getContext(), starttime);
	}

	/**
	 * Set value of StartTime
	 * @param context
	 * @param starttime
	 */
	public final void setStartTime(com.mendix.systemwideinterfaces.core.IContext context, java.util.Date starttime)
	{
		getMendixObject().setValue(context, MemberNames.StartTime.toString(), starttime);
	}

	/**
	 * @return value of EndTime
	 */
	public final java.util.Date getEndTime()
	{
		return getEndTime(getContext());
	}

	/**
	 * @param context
	 * @return value of EndTime
	 */
	public final java.util.Date getEndTime(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.util.Date) getMendixObject().getValue(context, MemberNames.EndTime.toString());
	}

	/**
	 * Set value of EndTime
	 * @param endtime
	 */
	public final void setEndTime(java.util.Date endtime)
	{
		setEndTime(getContext(), endtime);
	}

	/**
	 * Set value of EndTime
	 * @param context
	 * @param endtime
	 */
	public final void setEndTime(com.mendix.systemwideinterfaces.core.IContext context, java.util.Date endtime)
	{
		getMendixObject().setValue(context, MemberNames.EndTime.toString(), endtime);
	}

	/**
	 * Get value of Status
	 * @param status
	 */
	public final system.proxies.EventStatus getStatus()
	{
		return getStatus(getContext());
	}

	/**
	 * @param context
	 * @return value of Status
	 */
	public final system.proxies.EventStatus getStatus(com.mendix.systemwideinterfaces.core.IContext context)
	{
		Object obj = getMendixObject().getValue(context, MemberNames.Status.toString());
		if (obj == null) {
			return null;
		}
		return system.proxies.EventStatus.valueOf((java.lang.String) obj);
	}

	/**
	 * Set value of Status
	 * @param status
	 */
	public final void setStatus(system.proxies.EventStatus status)
	{
		setStatus(getContext(), status);
	}

	/**
	 * Set value of Status
	 * @param context
	 * @param status
	 */
	public final void setStatus(com.mendix.systemwideinterfaces.core.IContext context, system.proxies.EventStatus status)
	{
		if (status != null) {
			getMendixObject().setValue(context, MemberNames.Status.toString(), status.toString());
		} else {
			getMendixObject().setValue(context, MemberNames.Status.toString(), null);
		}
	}

	/**
	 * @throws com.mendix.core.CoreException
	 * @return value of ScheduledEventInformation_XASInstance
	 */
	public final system.proxies.XASInstance getScheduledEventInformation_XASInstance() throws com.mendix.core.CoreException
	{
		return getScheduledEventInformation_XASInstance(getContext());
	}

	/**
	 * @param context
	 * @return value of ScheduledEventInformation_XASInstance
	 * @throws com.mendix.core.CoreException
	 */
	public final system.proxies.XASInstance getScheduledEventInformation_XASInstance(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		system.proxies.XASInstance result = null;
		com.mendix.systemwideinterfaces.core.IMendixIdentifier identifier = getMendixObject().getValue(context, MemberNames.ScheduledEventInformation_XASInstance.toString());
		if (identifier != null) {
			result = system.proxies.XASInstance.load(context, identifier);
		}
		return result;
	}

	/**
	 * Set value of ScheduledEventInformation_XASInstance
	 * @param scheduledeventinformation_xasinstance
	 */
	public final void setScheduledEventInformation_XASInstance(system.proxies.XASInstance scheduledeventinformation_xasinstance)
	{
		setScheduledEventInformation_XASInstance(getContext(), scheduledeventinformation_xasinstance);
	}

	/**
	 * Set value of ScheduledEventInformation_XASInstance
	 * @param context
	 * @param scheduledeventinformation_xasinstance
	 */
	public final void setScheduledEventInformation_XASInstance(com.mendix.systemwideinterfaces.core.IContext context, system.proxies.XASInstance scheduledeventinformation_xasinstance)
	{
		if (scheduledeventinformation_xasinstance == null) {
			getMendixObject().setValue(context, MemberNames.ScheduledEventInformation_XASInstance.toString(), null);
		} else {
			getMendixObject().setValue(context, MemberNames.ScheduledEventInformation_XASInstance.toString(), scheduledeventinformation_xasinstance.getMendixObject().getId());
		}
	}

	@java.lang.Override
	public final com.mendix.systemwideinterfaces.core.IMendixObject getMendixObject()
	{
		return scheduledEventInformationMendixObject;
	}

	@java.lang.Override
	public final com.mendix.systemwideinterfaces.core.IContext getContext()
	{
		return context;
	}

	@java.lang.Override
	public boolean equals(Object obj)
	{
		if (obj == this) {
			return true;
		}
		if (obj != null && getClass().equals(obj.getClass()))
		{
			final system.proxies.ScheduledEventInformation that = (system.proxies.ScheduledEventInformation) obj;
			return getMendixObject().equals(that.getMendixObject());
		}
		return false;
	}

	@java.lang.Override
	public int hashCode()
	{
		return getMendixObject().hashCode();
	}

  /**
   * Gives full name ("Module.Entity" name) of the type of the entity.
   *
   * @return the name
   */
	public static java.lang.String getType()
	{
		return entityName;
	}
}
