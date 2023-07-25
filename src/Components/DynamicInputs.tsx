import React, { useState } from 'react';

const DynamicInputsComponent = ({environment}: any) => {
  const dynamicSegments = [
    'clientName',
    'clientId',
    'advertiserId',
    'campaignId',
    'entityLabel',
    'savedReportId',
    'experienceId',
    'adGroupId',
    'reportId',
    'userId',
    'templateId',
    'insertion_order_id',
  ];

  const [inputState, setInputState] = useState<{
    [key: string]: string;
  }>({
    adGroupId: "adGroupId",
    advertiserId: "advertiserId",
    campaignId: "campaignId",
    clientId: "clientId",
    clientName: "clientName",
    entityLabel: "entityLabel",
    experienceId: "experienceId",
    insertion_order_id: "insertion_order_id",
    reportId: "reportId",
    savedReportId: "savedReportId",
    templateId: "templateId",
    userId: "userId",
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
        <div>
      {dynamicSegments.map((segment) => (
        <div key={segment}>
          <label htmlFor={segment}>{segment}</label>
          <input
            type="text"
            id={segment}
            name={segment}
            value={inputState[segment] || ''}
            onChange={handleInputChange}
          />
        </div>
      ))}
      </div>
      <div>
        <div>{`${environment}/setup-account`}</div>
        <div>{`${environment}/${inputState['clientName']}/setup-account`}</div>
        <div>{`${environment}/admin`}</div>
        <div>{`${environment}/clients/${inputState['clientId']}/dashboard`}</div>
        <div>{`${environment}/plans`}</div>
        <div>{`${environment}/clients/${inputState['clientId']}/advertisers/${inputState['advertiserId']}/campaigns`}</div>
        <div>{`${environment}/clients/${inputState['clientId']}/advertisers/${inputState['advertiserId']}/campaigns/ad_groups`}</div>
        <div>{`${environment}/clients/${inputState['clientId']}/advertisers/${inputState['advertiserId']}/campaigns/${inputState['entityLabel']}`}</div>
        <div>{`${environment}/clients/${inputState['clientId']}/advertisers/${inputState['advertiserId']}/reporting`}</div>
        <div>{`${environment}/clients/${inputState['clientId']}/reporting`}</div>
        <div>{`${environment}/clients/${inputState['clientId']}/advertisers/${inputState['advertiserId']}/reporting/saved_reports`}</div>
        <div>{`${environment}/clients/${inputState['clientId']}/advertisers/${inputState['advertiserId']}/reporting/saved_reports`}</div>
        <div>{`${environment}/clients/${inputState['clientId']}/reporting/saved_reports`}</div>
        <div>{`${environment}/clients/${inputState['clientId']}/reporting/saved_report/${inputState['savedReportId']}/schedule`}</div>
        <div>{`${environment}/clients/${inputState['clientId']}/advertisers/${inputState['advertiserId']}/campaigns/create`}</div>
        <div>{`${environment}/clients/${inputState['clientId']}/advertisers/${inputState['advertiserId']}/experiences/${inputState['experienceId']}/campaigns/create`}</div>
        <div>{`${environment}/clients/${inputState['clientId']}/advertisers/${inputState['advertiserId']}/campaigns/${inputState['campaignId']}`}</div>
        <div>{`${environment}/clients/${inputState['clientId']}/advertisers/${inputState['advertiserId']}/campaigns/${inputState['campaignId']}/ad_groups`}</div>
        <div>{`${environment}/clients/${inputState['clientId']}/advertisers/${inputState['advertiserId']}/campaigns/${inputState['campaignId']}/ad_groups/create`}</div>
        <div>{`${environment}/clients/${inputState['clientId']}/advertisers/${inputState['advertiserId']}/campaigns/${inputState['campaignId']}/ad_groups/${inputState['adGroupId']}`}</div>
        <div>{`${environment}/login`}</div>
        <div>{`${environment}/${inputState['clientName']}/login`}</div>
        <div>{`${environment}/clients/${inputState['clientId']}/advertisers/${inputState['advertiserId']}/campaigns/create/v2`}</div>
        <div>{`${environment}/clients/${inputState['clientId']}/advertisers/${inputState['advertiserId']}/campaigns/${inputState['campaignId']}/v2`}</div>
        <div>{`${environment}/admin/clients/${inputState['clientId']}/template/create`}</div>
        <div>{`${environment}/admin/clients/${inputState['clientId']}/template/${inputState['templateId']}`}</div>
        <div>{`${environment}/admin/clients`}</div>
        <div>{`${environment}/admin/clients/advertiser-groups`}</div>
        <div>{`${environment}/admin/clients/advertisers`}</div>
        <div>{`${environment}/admin/users`}</div>
        <div>{`${environment}/${inputState['clientName']}/register`}</div>
        <div>{`${environment}/${inputState['clientName']}/register/advertisers/billing`}</div>
        <div>{`${environment}/${inputState['clientName']}/register/advertisers/billing/addAdvertiser`}</div>
        <div>{`${environment}/${inputState['clientName']}/register/advertisers/${inputState['advertiserId']}/payment`}</div>
        <div>{`${environment}/${inputState['clientName']}/register/advertisers/${inputState['advertiserId']}/entities`}</div>
        <div>{`${environment}/${inputState['clientName']}/register/advertisers/*`}</div>
        <div>{`${environment}/embedded/clients/${inputState['clientId']}/chart`}</div>
        <div>{`${environment}/embedded/clients/${inputState['clientId']}/advertisers/${inputState['id']}/campaigns/${inputState['campaignId']}/chart`}</div>
        <div>{`${environment}/embedded/clients/${inputState['clientId']}/advertisers/${inputState['id']}/campaigns/${inputState['campaignId']}/ad_groups/${inputState['adGroupId']}/chart`}</div>
        <div>{`${environment}/embedded/clients/${inputState['clientId']}/reporting`}</div>
        <div>{`${environment}/embedded/clients/${inputState['clientId']}/saved-reports`}</div>
        <div>{`${environment}/embedded/clients/${inputState['clientId']}/reporting/saved_report/${inputState['savedReportId']}/schedule`}</div>
        <div>{`${environment}/embedded/clients/${inputState['clientId']}/saved-reports/${inputState['reportId']}`}</div>
        <div>{`${environment}/embedded/clients/${inputState['clientId']}/insertion-orders`}</div>
        <div>{`${environment}/admin/clients/${inputState['clientId']}/insertion-orders`}</div>
        <div>{`${environment}/admin/clients/${inputState['clientId']}/insertion-orders/create`}</div>
        <div>{`${environment}/admin/clients/${inputState['clientId']}/insertion-orders/${inputState['insertion_order_id']}`}</div>
      </div>
    </div>
  );
};

export default DynamicInputsComponent;
