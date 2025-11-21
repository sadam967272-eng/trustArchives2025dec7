import { getRequests } from "@/lib/data"

export function TeamRequests() {
  const requests = getRequests()

  return (
    <div className="Team-requests">
      <div className="Team-requests-header">
        <h3 className="Team-requests-title">
          <i className="fa-solid fa-list-check"></i> لوحة الطلبات <span> (ابحث عن)</span>
        </h3>
        <button className="Team-requests-button"  id="AddNewRequest">
          {" "}
          أضف طلبك <i className="fa fa-plus" aria-hidden="true"></i>{" "}
        </button>
      </div>
      <p className="Team-requests-description">احصل على 5 نقاط على طلب تقوم بتنفيذه</p>
      <div className="Team-requests-table">
        <div className="Team-requests-row first-row">
          <div className="col-title">الطلب</div>
          <div className="col-title">المقدم</div>
          <div className="col-title">المنفذ</div>
        </div>

        {requests.map((request) => (
          <div className="Team-requests-row" key={request.id}>
            <div className="request">
              <i className="fas fa-bell"></i> {request.title}
            </div>
            <div className="applicant">{request.applicant}</div>
            <div className="Team-requests-actions">
              <button className="claim-btn" type="button">
                {request.executor || "سأقوم بها"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
