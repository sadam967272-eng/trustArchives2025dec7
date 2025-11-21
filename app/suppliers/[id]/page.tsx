import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatButtons } from "@/components/chat-buttons"
import Link from "next/link"

export default function SupplierPage({ params }: { params: { id: string } }) {
  return (
    <>
      <link rel="stylesheet" href="/css/single-supplier.css" />

      <Header />

      <div className="supplier-container">
        <div className="supplier-header">
          <img
            id="supplierLogo"
            src="/placeholder.svg?height=150&width=150"
            alt="شعار المورد"
            className="supplier-logo"
          />
          <div className="single-user-section" id="userHeaderSection">
            <div className="user-profile-column">
              <h2 id="supplierName">
                <i className="fas fa-building"></i> المورد {params.id}
              </h2>
              <p id="supplierDescription">
                <i className="fas fa-star"></i> مورد معتمد للمعدات الثقيلة
              </p>
              <div className="supplier-rating">
                <div className="stars">
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star-half-alt text-yellow-400"></i>
                </div>
                <span className="fw600">4.5/5</span>
              </div>
            </div>
          </div>
        </div>

        <div className="supplier-grid">
          <div className="info-box">
            <h3>
              <i className="fas fa-info-circle"></i> معلومات أساسية
            </h3>
            <p>
              <strong>
                <i className="fas fa-signature"></i> الاسم (عربي) :
              </strong>{" "}
              <span>شركة المورد {params.id}</span>
            </p>
            <p>
              <strong>
                <i className="fas fa-signature"></i> الاسم (إنجليزي) :
              </strong>{" "}
              <span>Supplier {params.id} Co.</span>
            </p>
            <p>
              <strong>
                <i className="fas fa-globe"></i> البلد :{" "}
              </strong>{" "}
              <span>الصين</span>
            </p>
            <p>
              <strong>
                <i className="fas fa-calendar-alt"></i> سنة التأسيس :
              </strong>{" "}
              <span>2005</span>
            </p>
            <p>
              <strong>
                <i className="fas fa-tags"></i> المجالات :{" "}
              </strong>{" "}
              <span>معدات ثقيلة، قطع غيار</span>
            </p>
            <p>
              <strong>
                <i className="fas fa-calendar-alt"></i> سنوات العمل :{" "}
              </strong>{" "}
              <span>18 سنة</span>
            </p>
            <p>
              <strong>
                <i className="fas fa-calendar-plus"></i> تاريخ الإضافة :{" "}
              </strong>{" "}
              <span>2023-01-15</span>
            </p>
            <p>
              <strong>
                <i className="fas fa-user"></i> أضيف بواسطة :{" "}
              </strong>{" "}
              <span>Admin</span>
            </p>
            <p>
              <strong>
                <i className="fas fa-hashtag"></i> الرقم التسلسلي :{" "}
              </strong>{" "}
              <span>SUP-{params.id}</span>
            </p>
            <p>
              <strong>
                <i className="fas fa-align-left"></i> وصف المورد :
              </strong>{" "}
              <span>شركة رائدة في تصنيع وتوريد المعدات الثقيلة بجودة عالية.</span>
            </p>
          </div>
          <div className="info-box">
            <h3>
              <i className="fas fa-shipping-fast"></i> الشحن و الدفع
            </h3>
            <p>
              <strong>
                <i className="fas fa-shipping-fast"></i> طرق الشحن المتاحة :{" "}
              </strong>{" "}
              <span>بحري، جوي</span>{" "}
            </p>
            <p>
              <strong>
                <i className="fas fa-credit-card"></i> وسائل الدفع المقبولة :{" "}
              </strong>{" "}
              <span>T/T, L/C</span>{" "}
            </p>
            <p>
              <strong>
                <i className="fas fa-hourglass-half"></i> متوسط زمن الشحن :{" "}
              </strong>{" "}
              <span>30-45 يوم</span>{" "}
            </p>
            <p>
              <strong>
                <i className="fas fa-certificate"></i> شهادات الجودة :{" "}
              </strong>{" "}
              <span>ISO 9001, CE</span>{" "}
            </p>
            <p>
              <strong>
                <i className="fas fa-star"></i> تقييم الفريق :{" "}
              </strong>{" "}
              <span>ممتاز</span>
            </p>
          </div>
          <div className="info-box">
            <h3>
              <i className="fas fa-briefcase"></i> ممثل التواصل
            </h3>
            <p>
              <strong>
                <i className="fas fa-user"></i> الاسم :
              </strong>{" "}
              <span>Li Wei</span>
            </p>
            <p>
              <strong>
                <i className="fas fa-briefcase"></i> المسمى :
              </strong>{" "}
              <span>Sales Manager</span>
            </p>
            <p>
              <strong>
                <i className="fas fa-envelope"></i> البريد :
              </strong>{" "}
              <span>sales@supplier{params.id}.com</span>
            </p>
            <p>
              <strong>
                <i className="fas fa-phone"></i> الهاتف :
              </strong>{" "}
              <span>+86 138 0000 0000</span>
            </p>
            <p>
              <strong>
                <i className="fab fa-whatsapp"></i> واتساب :
              </strong>{" "}
              <span>+86 138 0000 0000</span>
            </p>
            <p>
              <strong>
                <i className="fab fa-weixin"></i> ويتشات :
              </strong>{" "}
              <span>liwei_sup</span>
            </p>
            <p>
              <strong>
                <i className="fas fa-language"></i> لغة التواصل :
              </strong>{" "}
              <span>الإنجليزية، الصينية</span>
            </p>
          </div>
          <div className="info-box">
            <h3>
              <i className="fas fa-industry"></i> معلومات فنية وتشغيلية
            </h3>
            <p>
              <strong>
                <i className="fas fa-users"></i> حجم الشركة :
              </strong>{" "}
              <span>500+ موظف</span>
            </p>
            <p>
              <strong>
                <i className="fas fa-tachometer-alt"></i> الطاقة الإنتاجية :
              </strong>{" "}
              <span>1000 وحدة/شهر</span>
            </p>
            <p>
              <strong>
                <i className="fas fa-magic"></i> القدرة على التخصيص :
              </strong>{" "}
              <span>متاحة</span>
            </p>
            <p>
              <strong>
                <i className="fas fa-hard-hat"></i> عدد المهندسين :
              </strong>{" "}
              <span>50</span>
            </p>
            <p>
              <strong>
                <i className="fas fa-chart-area"></i> الأسواق الرئيسية :
              </strong>{" "}
              <span>الشرق الأوسط، أفريقيا</span>
            </p>
          </div>
        </div>
        <div className="info-box2">
          <h3>
            <i className="fas fa-address-card"></i> معلومات الاتصال
          </h3>
          <p>
            <strong>
              <i className="fas fa-phone"></i> الهاتف :
            </strong>{" "}
            <span>+86 20 0000 0000</span>
          </p>
          <p>
            <strong>
              <i className="fas fa-envelope"></i> البريد :
            </strong>{" "}
            <span>info@supplier{params.id}.com</span>
          </p>
          <p>
            <strong>
              <i className="fas fa-globe"></i> الموقع :
            </strong>{" "}
            <a href="#" target="_blank" rel="noreferrer">
              www.supplier{params.id}.com
            </a>
          </p>
          <p>
            <strong>
              <i className="fas fa-map-marker-alt"></i> العنوان :
            </strong>{" "}
            <span>Guangzhou, China</span>
          </p>
          <p>
            <strong>
              <i className="fas fa-map"></i> الخريطة :
            </strong>{" "}
            <a href="#" target="_blank" rel="noreferrer">
              عرض الموقع
            </a>
          </p>
        </div>

        <div className="info-box">
          <h3>
            <i className="fas fa-file-contract"></i> الشروط التجارية
          </h3>
          <p>
            <strong>
              <i className="fas fa-coins"></i> العملة الأساسية :
            </strong>{" "}
            <span>USD, CNY</span>
          </p>
          <p>
            <strong>
              <i className="fas fa-file-contract"></i> Incoterms :
            </strong>{" "}
            <span>FOB, CIF, EXW</span>
          </p>
          <p>
            <strong>
              <i className="fas fa-clipboard-check"></i> تقارير الاختبار :
            </strong>{" "}
            <span>متاحة عند الطلب</span>
          </p>
          <p>
            <strong>
              <i className="fas fa-user-check"></i> إمكانية التدقيق/الزيارة :
            </strong>{" "}
            <span>مرحب بها</span>
          </p>
          <p>
            <strong>
              <i className="fas fa-boxes"></i> MOQ :
            </strong>{" "}
            <span>1 وحدة</span>
          </p>
          <p>
            <strong>
              <i className="fas fa-shield-alt"></i> فترة الضمان :
            </strong>{" "}
            <span>12 شهر</span>
          </p>
          <p>
            <strong>
              <i className="fas fa-toggle-on"></i> حالة المورد :
            </strong>{" "}
            <span>نشط</span>
          </p>
        </div>
        <h3 className="title2">
          <i className="fa fa-link" aria-hidden="true"></i> روابط تواصل سريعة بالمورد
        </h3>

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
          <a href="#" className="action-btn website">
            <i className="fas fa-globe"></i> موقع ويب
          </a>
          <a href="#" className="action-btn facebook">
            <i className="fab fa-facebook"></i> فيسبوك
          </a>
          <a href="#" className="action-btn location ">
            <i className="fas fa-map"></i> خريطة
          </a>
          <a href="#" className="action-btn wechat">
            <i className="fab fa-weixin"></i> ويشات
          </a>
          <a href="#" className="action-btn instagram">
            <i className="fa-brands fa-instagram"></i> انستجرام
          </a>
        </div>

        <div className="products-section">
          <h3 className="title2">
            <i className="fas fa-box-open"></i> أهم السلع والمنتجات
          </h3>
          <div id="mainProductsList" className="products-grid">
            {/* Product cards would go here */}
          </div>
        </div>

        <div className="info-box">
          <h3>
            <i className="fas fa-folder-open"></i> المرفقات
          </h3>
          <p>
            <strong>
              <i className="fas fa-file-pdf"></i> ملف تعريفي (PDF):
            </strong>{" "}
            <a href="#" target="_blank" rel="noreferrer">
              تحميل
            </a>
          </p>
          <p>
            <strong>
              <i className="fas fa-book-open"></i> كاتلوج المنتجات:
            </strong>{" "}
            <a href="#" target="_blank" rel="noreferrer">
              تحميل
            </a>
          </p>
          <p>
            <strong>
              <i className="fas fa-scroll"></i> شهادات الجودة:
            </strong>{" "}
            <span>ISO9001.pdf</span>
          </p>
        </div>
        <div className="download-section">
          <a href="#" className="download-btn">
            <i className="fas fa-download"></i> تحميل ملف المورد PDF
          </a>
        </div>
      </div>

      <div className="download-section">
        <Link href="/suppliers" className="download-btn">
          <i className="fa fa-angle-double-right"></i> العودة الى صفحة الموردين
        </Link>
      </div>

       
      <ChatButtons />
    </>
  )
}
