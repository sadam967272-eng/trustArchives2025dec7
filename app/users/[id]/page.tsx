import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatButtons } from "@/components/chat-buttons"
import Link from "next/link"

export default function UserPage({ params }: { params: { id: string } }) {
  return (
    <>
      <link rel="stylesheet" href="/css/single-user.css" />

      <Header />

      <main>
        <div className="single-user-container">
          {/* Profile Section */}
          <div className="single-user-section" id="userHeaderSection">
            <div className="user-profile-column">
              <img
                id="userAvatar"
                src="/placeholder.svg?height=150&width=150"
                alt="صورة المستخدم"
                className="single-user-image"
              />
              <h2 id="userDisplayName">
                <i className="fas fa-user"></i> المستخدم {params.id}
              </h2>
            </div>

            <div className="single-user-info">
              {/* User Stats */}
              <div className="single-user-stats">
                <div className="stat-item3">
                  <div className="stat-label">
                    <i className="fas fa-trophy" aria-hidden="true"></i> النقاط المحققة
                  </div>
                  <div className="stat-value">150</div>
                </div>
                <div className="stat-item3">
                  <div className="stat-label">
                    <i className="fas fa-box" aria-hidden="true"></i> المنتجات المضافة
                  </div>
                  <div className="stat-value2">23</div>
                </div>
                <div className="stat-item3">
                  <div className="stat-label">
                    <i className="fas fa-clock" aria-hidden="true"></i> آخـــــر تـــــواجــــد
                  </div>
                  <div className="stat-value3">منذ 5 دقائق</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="single-user-action-buttons">
                <button className="btn btn-primary">
                  <i className="fa-solid fa-id-card"></i> تعديل بيانات المستخدم
                </button>
                <button className="btn btn-secondary">
                  <i className="fas fa-lock"></i> تجميد العضوية
                </button>
                <button className="btn btn-danger">
                  <i className="fas fa-trash"></i> حذف المستخدم
                </button>
                <button className="btn btn-tasx">
                  <i className="fas fa-paper-plane"></i> إرسال مهمة
                </button>
                <button className="btn btn-hounr">
                  <i className="fas fa-award"></i> تكريم المستخدم
                </button>
                <button className="btn btn-primary">
                  <i className="fas fa-plus-circle"></i> منح نقطة
                </button>
                <button className="btn btn-warning">
                  <i className="fas fa-cog"></i> إدارة النقاط
                </button>
              </div>
            </div>
          </div>

          {/* Basic Info Section */}
          <div className="info-section-title" id="basicInfoHeader">
            <h2>
              <i className="fas fa-info-circle"></i> المعلومات الأساسية
            </h2>
            <button className="edit-btn">
              <i className="fas fa-edit"></i> تعديل
            </button>
          </div>

          <div className="info-grid" id="basicInfoGrid">
            <div className="info-item3">
              <div>
                <div className="info-label">الاسم كاملاً</div>
                <div className="info-value">محمد أحمد علي</div>
              </div>
            </div>
            <div className="info-item3">
              <div>
                <div className="info-label">الاسم الأول</div>
                <div className="info-value">محمد</div>
              </div>
            </div>
            <div className="info-item3">
              <div>
                <div className="info-label">اسم العائلة</div>
                <div className="info-value">علي</div>
              </div>
            </div>
            <div className="info-item3">
              <div>
                <div className="info-label">البلد</div>
                <div className="info-value">اليمن</div>
              </div>
            </div>
            <div className="info-item3">
              <div>
                <div className="info-label">العمر</div>
                <div className="info-value">30</div>
              </div>
            </div>
            <div className="info-item3">
              <div>
                <div className="info-label">تاريخ الميلاد</div>
                <div className="info-value">1994-05-15</div>
              </div>
            </div>
            <div className="info-item3">
              <div>
                <div className="info-label">الجنس</div>
                <div className="info-value">ذكر</div>
              </div>
            </div>
            <div className="info-item3">
              <div>
                <div className="info-label">السكن</div>
                <div className="info-value">صنعاء</div>
              </div>
            </div>
            <div className="info-item3">
              <div>
                <div className="info-label">اسم المستخدم</div>
                <div className="info-value2">user_{params.id}</div>
              </div>
            </div>
            <div className="info-item3">
              <div>
                <div className="info-label">الدور</div>
                <div className="info-value2">مدير</div>
              </div>
            </div>
            <div className="info-item3">
              <div>
                <div className="info-label">كلمة المرور</div>
                <div className="info-value2">••••••••</div>
              </div>
            </div>
            <div className="info-item3">
              <div>
                <div className="info-label">تاريخ الانضمام</div>
                <div className="info-value2">2022-01-01</div>
              </div>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="contact-section-title" id="contactInfoHeader">
            <h2>
              <i className="fas fa-address-book"></i> معلومات التواصل
            </h2>
            <button className="edit-btn2">
              <i className="fas fa-edit"></i> تعديل
            </button>
          </div>

          <div className="contact-grid" id="contactInfoGrid">
            <div className="contact-item3">
              <div>
                <div className="contact-label">رقم الهاتف</div>
                <div className="contact-value2">+967 777 000 000</div>
              </div>
              <button className="contact-btn">
                <i className="fas fa-phone-alt"></i>
              </button>
            </div>
            <div className="contact-item3">
              <div>
                <div className="contact-label">أرقام هواتف إضافية</div>
                <ul className="phone-list">
                  <li>+967 711 000 000</li>
                </ul>
              </div>
            </div>
            <div className="contact-item3">
              <div>
                <div className="contact-label">البريد الإلكتروني</div>
                <div className="contact-value2">user{params.id}@example.com</div>
              </div>
              <button className="contact-btn">
                <i className="fas fa-envelope"></i>
              </button>
            </div>
            <div className="contact-item3">
              <div>
                <div className="contact-label">رقم الواتساب</div>
                <div className="contact-value2">+967 777 000 000</div>
              </div>
              <button className="contact-btn">
                <i className="fa-brands fa-whatsapp b-icon"></i>
              </button>
            </div>
            <div className="contact-item3">
              <div>
                <div className="contact-label">ملاحظات</div>
                <div className="contact-value">موظف نشيط ومجتهد</div>
              </div>
              <button className="contact-btn">
                <i className="fas fa-sticky-note"></i>
              </button>
            </div>
          </div>

          {/* Bio Section */}
          <div className="info-section-title" id="bioSectionHeader">
            <h2>
              <i className="fas fa-pencil-alt"></i> النبذة الشخصية
            </h2>
          </div>
          <div className="bio-box">
            <p className="bio-text">مهندس برمجيات ذو خبرة واسعة في تطوير تطبيقات الويب والهواتف الذكية.</p>
          </div>
        </div>

        {/* Back Button */}
        <div className="back3-section">
          <Link href="/admin" className="back3-btn">
            <i className="fa fa-angle-double-right"></i> العودة الى صفحة الادارة
          </Link>
        </div>
      </main>

      
      <ChatButtons />
    </>
  )
}
