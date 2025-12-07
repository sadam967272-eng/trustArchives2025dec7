import { Header } from "@/components/header"
import { ChatButtons } from "@/components/chat-buttons"
import Link from "next/link"
import { AdminControls } from "@/components/admin-controls"

export default function ClientPage({ params }: { params: { id: string } }) {
  return (
    <>
      <link rel="stylesheet" href="/css/single-client.css" />

      <Header />

      <div className="client-container">
        <AdminControls id={params.id} editUrl="/add-customer" type="العميل" />

        <div className="client-header">
          <img id="clientLogo" src="/placeholder.svg?height=150&width=150" alt="شعار العميل" className="client-logo" />
          <div className="single-user-section" id="userHeaderSection">
            <div className="user-profile-column">
              <h2 id="clientName">
                <i className="fas fa-building"></i> شركة العميل {params.id}
              </h2>
              <p id="clientDescription">
                <i className="fas fa-star"></i> شركة رائدة في مجال المقاولات
              </p>
              <div className="client-rating">
                <div className="stars">
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <span className="fw600">4/5</span>
              </div>
            </div>
          </div>
        </div>

        <div className="client-grid">
          <div className="info-box">
            <h3>
              <i className="fas fa-info-circle"></i> معلومات الكيان التجاري الأساسية
            </h3>
            <p>
              <strong>
                <i className="fas fa-signature"></i> الاسم الرسمي (عربي):
              </strong>{" "}
              <span>شركة العميل {params.id} المحدودة</span>
            </p>
            <p>
              <strong>
                <i className="fas fa-signature"></i> الاسم الرسمي (إنجليزي):
              </strong>{" "}
              <span>Client {params.id} Co. Ltd</span>
            </p>
            <p>
              <strong>
                <i className="fas fa-file-contract"></i> السجل التجاري:
              </strong>{" "}
              <span>1010101010</span>
            </p>
            <p>
              <strong>
                <i className="fas fa-globe"></i> البلد / المدينة:
              </strong>{" "}
              <span>السعودية / الرياض</span>
            </p>
            <p>
              <strong>
                <i className="fas fa-map-marker-alt"></i> العنوان الرسمي:
              </strong>{" "}
              <span>شارع الملك فهد، حي العليا</span>
            </p>
            <p>
              <strong>
                <i className="fas fa-industry"></i> القطاع الصناعي:
              </strong>{" "}
              <span>مقاولات عامة</span>
            </p>
            <p>
              <strong>
                <i className="fas fa-users"></i> حجم الشركة:
              </strong>{" "}
              <span>50-100 موظف</span>
            </p>
          </div>
          <div className="info-box">
            <h3>
              <i className="fas fa-address-book"></i> جهات الاتصال الرئيسية
            </h3>
            <p>
              <strong>
                <i className="fas fa-user-tie"></i> اسم جهة الاتصال الرئيسية:
              </strong>{" "}
              <span>أحمد محمد</span>
            </p>
            <p>
              <strong>
                <i className="fas fa-briefcase"></i> المنصب:
              </strong>{" "}
              <span>مدير المشتريات</span>
            </p>
            <p>
              <strong>
                <i className="fas fa-phone"></i> الهاتف المباشر:
              </strong>{" "}
              <span>+966 50 000 0000</span>
            </p>
            <p>
              <strong>
                <i className="fas fa-envelope"></i> البريد الإلكتروني:
              </strong>{" "}
              <span>ahmed@client{params.id}.com</span>
            </p>
            <p>
              <strong>
                <i className="fas fa-user-cog"></i> جهة الاتصال الفنية:
              </strong>{" "}
              <span>خالد علي</span>
            </p>
            <p>
              <strong>
                <i className="fas fa-phone-alt"></i> هاتف الاتصال الفني:
              </strong>{" "}
              <span>+966 55 555 5555</span>
            </p>
            <p>
              <strong>
                <i className="fas fa-at"></i> بريد الاتصال الفني:
              </strong>{" "}
              <span>tech@client{params.id}.com</span>
            </p>
          </div>
          <div className="info-box">
            <h3>
              <i className="fas fa-folder-open"></i> الأرشفة والمتابعة الداخلية
            </h3>
            <p>
              <strong>
                <i className="fas fa-file-pdf"></i> المرفقات:
              </strong>{" "}
              <span>ملف الشركة.pdf</span>
            </p>
            <p>
              <strong>
                <i className="fas fa-sticky-note"></i> الملاحظات الداخلية:
              </strong>{" "}
              <span>عميل مميز، يطلب كميات كبيرة</span>
            </p>
            <p>
              <strong>
                <i className="fas fa-calendar-plus"></i> تاريخ الإضافة:
              </strong>{" "}
              <span>2023-05-20</span>
            </p>
            <p>
              <strong>
                <i className="fas fa-user"></i> الموظف المسؤول:
              </strong>{" "}
              <span>سارة أحمد</span>
            </p>
          </div>
        </div>

        <div className="quick-actions">
          <a href="#" className="action-btn phone">
            <i className="fas fa-phone"></i> اتصال
          </a>
          <a href="#" className="action-btn whatsapp">
            <i className="fab fa-whatsapp"></i> واتساب
          </a>
          <a href="#" className="action-btn email">
            <i className="fas fa-envelope"></i> إيميل
          </a>
          <a href="#" className="action-btn location">
            <i className="fas fa-map"></i> خريطة
          </a>
        </div>

        <div className="download-section">
          <a href="#" className="download-btn">
            <i className="fas fa-download"></i> تحميل ملف العميل PDF
          </a>
          <Link href="/clients" className="download-btn">
            <i className="fa fa-angle-double-right"></i> العودة الى لوحة العملاء
          </Link>
        </div>
      </div>

      <ChatButtons />
    </>
  )
}
