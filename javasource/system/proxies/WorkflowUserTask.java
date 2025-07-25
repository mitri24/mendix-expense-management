// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package system.proxies;

public class WorkflowUserTask implements com.mendix.systemwideinterfaces.core.IEntityProxy
{
	private final com.mendix.systemwideinterfaces.core.IMendixObject workflowUserTaskMendixObject;

	private final com.mendix.systemwideinterfaces.core.IContext context;

	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "System.WorkflowUserTask";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		Name("Name"),
		Description("Description"),
		StartTime("StartTime"),
		DueDate("DueDate"),
		EndTime("EndTime"),
		Outcome("Outcome"),
		State("State"),
		CompletionType("CompletionType"),
		WorkflowUserTask_TargetUsers("System.WorkflowUserTask_TargetUsers"),
		WorkflowUserTask_Assignees("System.WorkflowUserTask_Assignees"),
		WorkflowUserTask_Workflow("System.WorkflowUserTask_Workflow"),
		WorkflowUserTask_WorkflowUserTaskDefinition("System.WorkflowUserTask_WorkflowUserTaskDefinition");

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

	public WorkflowUserTask(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, entityName));
	}

	protected WorkflowUserTask(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject workflowUserTaskMendixObject)
	{
		if (workflowUserTaskMendixObject == null) {
			throw new java.lang.IllegalArgumentException("The given object cannot be null.");
		}
		if (!workflowUserTaskMendixObject.isInstanceOf(entityName)) {
			throw new java.lang.IllegalArgumentException(String.format("The given object is not a %s", entityName));
		}	

		this.workflowUserTaskMendixObject = workflowUserTaskMendixObject;
		this.context = context;
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 * @param context The context to be used
	 * @param mendixObject The Mendix object for the new instance
	 * @return a new instance of this proxy class
	 */
	public static system.proxies.WorkflowUserTask initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		return new system.proxies.WorkflowUserTask(context, mendixObject);
	}

	public static system.proxies.WorkflowUserTask load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return system.proxies.WorkflowUserTask.initialize(context, mendixObject);
	}

	public static java.util.List<system.proxies.WorkflowUserTask> load(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String xpathConstraint) throws com.mendix.core.CoreException
	{
		return com.mendix.core.Core.createXPathQuery(String.format("//%1$s%2$s", entityName, xpathConstraint))
			.execute(context)
			.stream()
			.map(obj -> system.proxies.WorkflowUserTask.initialize(context, obj))
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
	 * @return value of DueDate
	 */
	public final java.util.Date getDueDate()
	{
		return getDueDate(getContext());
	}

	/**
	 * @param context
	 * @return value of DueDate
	 */
	public final java.util.Date getDueDate(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.util.Date) getMendixObject().getValue(context, MemberNames.DueDate.toString());
	}

	/**
	 * Set value of DueDate
	 * @param duedate
	 */
	public final void setDueDate(java.util.Date duedate)
	{
		setDueDate(getContext(), duedate);
	}

	/**
	 * Set value of DueDate
	 * @param context
	 * @param duedate
	 */
	public final void setDueDate(com.mendix.systemwideinterfaces.core.IContext context, java.util.Date duedate)
	{
		getMendixObject().setValue(context, MemberNames.DueDate.toString(), duedate);
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
	 * @return value of Outcome
	 */
	public final java.lang.String getOutcome()
	{
		return getOutcome(getContext());
	}

	/**
	 * @param context
	 * @return value of Outcome
	 */
	public final java.lang.String getOutcome(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Outcome.toString());
	}

	/**
	 * Set value of Outcome
	 * @param outcome
	 */
	public final void setOutcome(java.lang.String outcome)
	{
		setOutcome(getContext(), outcome);
	}

	/**
	 * Set value of Outcome
	 * @param context
	 * @param outcome
	 */
	public final void setOutcome(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String outcome)
	{
		getMendixObject().setValue(context, MemberNames.Outcome.toString(), outcome);
	}

	/**
	 * Get value of State
	 * @param state
	 */
	public final system.proxies.WorkflowUserTaskState getState()
	{
		return getState(getContext());
	}

	/**
	 * @param context
	 * @return value of State
	 */
	public final system.proxies.WorkflowUserTaskState getState(com.mendix.systemwideinterfaces.core.IContext context)
	{
		Object obj = getMendixObject().getValue(context, MemberNames.State.toString());
		if (obj == null) {
			return null;
		}
		return system.proxies.WorkflowUserTaskState.valueOf((java.lang.String) obj);
	}

	/**
	 * Set value of State
	 * @param state
	 */
	public final void setState(system.proxies.WorkflowUserTaskState state)
	{
		setState(getContext(), state);
	}

	/**
	 * Set value of State
	 * @param context
	 * @param state
	 */
	public final void setState(com.mendix.systemwideinterfaces.core.IContext context, system.proxies.WorkflowUserTaskState state)
	{
		if (state != null) {
			getMendixObject().setValue(context, MemberNames.State.toString(), state.toString());
		} else {
			getMendixObject().setValue(context, MemberNames.State.toString(), null);
		}
	}

	/**
	 * Get value of CompletionType
	 * @param completiontype
	 */
	public final system.proxies.WorkflowUserTaskCompletionType getCompletionType()
	{
		return getCompletionType(getContext());
	}

	/**
	 * @param context
	 * @return value of CompletionType
	 */
	public final system.proxies.WorkflowUserTaskCompletionType getCompletionType(com.mendix.systemwideinterfaces.core.IContext context)
	{
		Object obj = getMendixObject().getValue(context, MemberNames.CompletionType.toString());
		if (obj == null) {
			return null;
		}
		return system.proxies.WorkflowUserTaskCompletionType.valueOf((java.lang.String) obj);
	}

	/**
	 * Set value of CompletionType
	 * @param completiontype
	 */
	public final void setCompletionType(system.proxies.WorkflowUserTaskCompletionType completiontype)
	{
		setCompletionType(getContext(), completiontype);
	}

	/**
	 * Set value of CompletionType
	 * @param context
	 * @param completiontype
	 */
	public final void setCompletionType(com.mendix.systemwideinterfaces.core.IContext context, system.proxies.WorkflowUserTaskCompletionType completiontype)
	{
		if (completiontype != null) {
			getMendixObject().setValue(context, MemberNames.CompletionType.toString(), completiontype.toString());
		} else {
			getMendixObject().setValue(context, MemberNames.CompletionType.toString(), null);
		}
	}

	/**
	 * @throws com.mendix.core.CoreException
	 * @return value of WorkflowUserTask_TargetUsers
	 */
	public final java.util.List<system.proxies.User> getWorkflowUserTask_TargetUsers() throws com.mendix.core.CoreException
	{
		return getWorkflowUserTask_TargetUsers(getContext());
	}

	/**
	 * @param context
	 * @return value of WorkflowUserTask_TargetUsers
	 * @throws com.mendix.core.CoreException
	 */
	@SuppressWarnings("unchecked")
	public final java.util.List<system.proxies.User> getWorkflowUserTask_TargetUsers(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		java.util.List<system.proxies.User> result = new java.util.ArrayList<>();
		Object valueObject = getMendixObject().getValue(context, MemberNames.WorkflowUserTask_TargetUsers.toString());
		if (valueObject == null) {
			return result;
		}
		for (com.mendix.systemwideinterfaces.core.IMendixObject mendixObject : com.mendix.core.Core.retrieveIdList(context, (java.util.List<com.mendix.systemwideinterfaces.core.IMendixIdentifier>) valueObject)) {
			result.add(system.proxies.User.initialize(context, mendixObject));
		}
		return result;
	}

	/**
	 * Set value of WorkflowUserTask_TargetUsers
	 * @param workflowusertask_targetusers
	 */
	public final void setWorkflowUserTask_TargetUsers(java.util.List<system.proxies.User> workflowusertask_targetusers)
	{
		setWorkflowUserTask_TargetUsers(getContext(), workflowusertask_targetusers);
	}

	/**
	 * Set value of WorkflowUserTask_TargetUsers
	 * @param context
	 * @param workflowusertask_targetusers
	 */
	public final void setWorkflowUserTask_TargetUsers(com.mendix.systemwideinterfaces.core.IContext context, java.util.List<system.proxies.User> workflowusertask_targetusers)
	{
		var identifiers = workflowusertask_targetusers
			.stream()
			.map(proxyObject -> proxyObject.getMendixObject().getId())
			.collect(java.util.stream.Collectors.toList());
		
		getMendixObject().setValue(context, MemberNames.WorkflowUserTask_TargetUsers.toString(), identifiers);
	}

	/**
	 * @throws com.mendix.core.CoreException
	 * @return value of WorkflowUserTask_Assignees
	 */
	public final java.util.List<system.proxies.User> getWorkflowUserTask_Assignees() throws com.mendix.core.CoreException
	{
		return getWorkflowUserTask_Assignees(getContext());
	}

	/**
	 * @param context
	 * @return value of WorkflowUserTask_Assignees
	 * @throws com.mendix.core.CoreException
	 */
	@SuppressWarnings("unchecked")
	public final java.util.List<system.proxies.User> getWorkflowUserTask_Assignees(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		java.util.List<system.proxies.User> result = new java.util.ArrayList<>();
		Object valueObject = getMendixObject().getValue(context, MemberNames.WorkflowUserTask_Assignees.toString());
		if (valueObject == null) {
			return result;
		}
		for (com.mendix.systemwideinterfaces.core.IMendixObject mendixObject : com.mendix.core.Core.retrieveIdList(context, (java.util.List<com.mendix.systemwideinterfaces.core.IMendixIdentifier>) valueObject)) {
			result.add(system.proxies.User.initialize(context, mendixObject));
		}
		return result;
	}

	/**
	 * Set value of WorkflowUserTask_Assignees
	 * @param workflowusertask_assignees
	 */
	public final void setWorkflowUserTask_Assignees(java.util.List<system.proxies.User> workflowusertask_assignees)
	{
		setWorkflowUserTask_Assignees(getContext(), workflowusertask_assignees);
	}

	/**
	 * Set value of WorkflowUserTask_Assignees
	 * @param context
	 * @param workflowusertask_assignees
	 */
	public final void setWorkflowUserTask_Assignees(com.mendix.systemwideinterfaces.core.IContext context, java.util.List<system.proxies.User> workflowusertask_assignees)
	{
		var identifiers = workflowusertask_assignees
			.stream()
			.map(proxyObject -> proxyObject.getMendixObject().getId())
			.collect(java.util.stream.Collectors.toList());
		
		getMendixObject().setValue(context, MemberNames.WorkflowUserTask_Assignees.toString(), identifiers);
	}

	/**
	 * @throws com.mendix.core.CoreException
	 * @return value of WorkflowUserTask_Workflow
	 */
	public final system.proxies.Workflow getWorkflowUserTask_Workflow() throws com.mendix.core.CoreException
	{
		return getWorkflowUserTask_Workflow(getContext());
	}

	/**
	 * @param context
	 * @return value of WorkflowUserTask_Workflow
	 * @throws com.mendix.core.CoreException
	 */
	public final system.proxies.Workflow getWorkflowUserTask_Workflow(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		system.proxies.Workflow result = null;
		com.mendix.systemwideinterfaces.core.IMendixIdentifier identifier = getMendixObject().getValue(context, MemberNames.WorkflowUserTask_Workflow.toString());
		if (identifier != null) {
			result = system.proxies.Workflow.load(context, identifier);
		}
		return result;
	}

	/**
	 * Set value of WorkflowUserTask_Workflow
	 * @param workflowusertask_workflow
	 */
	public final void setWorkflowUserTask_Workflow(system.proxies.Workflow workflowusertask_workflow)
	{
		setWorkflowUserTask_Workflow(getContext(), workflowusertask_workflow);
	}

	/**
	 * Set value of WorkflowUserTask_Workflow
	 * @param context
	 * @param workflowusertask_workflow
	 */
	public final void setWorkflowUserTask_Workflow(com.mendix.systemwideinterfaces.core.IContext context, system.proxies.Workflow workflowusertask_workflow)
	{
		if (workflowusertask_workflow == null) {
			getMendixObject().setValue(context, MemberNames.WorkflowUserTask_Workflow.toString(), null);
		} else {
			getMendixObject().setValue(context, MemberNames.WorkflowUserTask_Workflow.toString(), workflowusertask_workflow.getMendixObject().getId());
		}
	}

	/**
	 * @throws com.mendix.core.CoreException
	 * @return value of WorkflowUserTask_WorkflowUserTaskDefinition
	 */
	public final system.proxies.WorkflowUserTaskDefinition getWorkflowUserTask_WorkflowUserTaskDefinition() throws com.mendix.core.CoreException
	{
		return getWorkflowUserTask_WorkflowUserTaskDefinition(getContext());
	}

	/**
	 * @param context
	 * @return value of WorkflowUserTask_WorkflowUserTaskDefinition
	 * @throws com.mendix.core.CoreException
	 */
	public final system.proxies.WorkflowUserTaskDefinition getWorkflowUserTask_WorkflowUserTaskDefinition(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		system.proxies.WorkflowUserTaskDefinition result = null;
		com.mendix.systemwideinterfaces.core.IMendixIdentifier identifier = getMendixObject().getValue(context, MemberNames.WorkflowUserTask_WorkflowUserTaskDefinition.toString());
		if (identifier != null) {
			result = system.proxies.WorkflowUserTaskDefinition.load(context, identifier);
		}
		return result;
	}

	/**
	 * Set value of WorkflowUserTask_WorkflowUserTaskDefinition
	 * @param workflowusertask_workflowusertaskdefinition
	 */
	public final void setWorkflowUserTask_WorkflowUserTaskDefinition(system.proxies.WorkflowUserTaskDefinition workflowusertask_workflowusertaskdefinition)
	{
		setWorkflowUserTask_WorkflowUserTaskDefinition(getContext(), workflowusertask_workflowusertaskdefinition);
	}

	/**
	 * Set value of WorkflowUserTask_WorkflowUserTaskDefinition
	 * @param context
	 * @param workflowusertask_workflowusertaskdefinition
	 */
	public final void setWorkflowUserTask_WorkflowUserTaskDefinition(com.mendix.systemwideinterfaces.core.IContext context, system.proxies.WorkflowUserTaskDefinition workflowusertask_workflowusertaskdefinition)
	{
		if (workflowusertask_workflowusertaskdefinition == null) {
			getMendixObject().setValue(context, MemberNames.WorkflowUserTask_WorkflowUserTaskDefinition.toString(), null);
		} else {
			getMendixObject().setValue(context, MemberNames.WorkflowUserTask_WorkflowUserTaskDefinition.toString(), workflowusertask_workflowusertaskdefinition.getMendixObject().getId());
		}
	}

	@java.lang.Override
	public final com.mendix.systemwideinterfaces.core.IMendixObject getMendixObject()
	{
		return workflowUserTaskMendixObject;
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
			final system.proxies.WorkflowUserTask that = (system.proxies.WorkflowUserTask) obj;
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
