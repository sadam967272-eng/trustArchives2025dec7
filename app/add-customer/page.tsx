"use client"

import { Header } from "@/components/header"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function AddClientPage() {
  return (
    <>
      <link rel="stylesheet" href="/css/add-product.css" />
      <ThemeToggle />
      <Header />

      <div className="product-container">
        <div className="product-card">
          <div className="product-header">
            <h1 className="product-title">
              <i className="fas fa-user-plus"></i> إضافة عميل جديد
            </h1>
          </div>
          <div className="product-body">
            <form id="clientForm" className="product-form">
              <div className="product-section" id="section-1">
                <h2 className="product-section-title">
                  <i className="fas fa-building"></i> معلومات العميل الأساسية
                </h2>

                <div className="product-form-grid">
                  <div className="product-form-group full-width" style={{ gridColumn: "1 / -1" }}>
                    <label className="product-form-label">
                      <i className="fas fa-barcode"></i> الرقم التسلسلي للعميل (تلقائي)
                    </label>
                    <input
                      type="text"
                      className="product-form-input bg-gray-100 cursor-not-allowed"
                      defaultValue={`CLT-${Math.floor(Math.random() * 1000000)}`}
                      readOnly
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="companyNameAr">
                      <i className="fas fa-building"></i> الاسم الرسمي للشركة (عربي) *
                    </label>
                    <input
                      type="text"
                      id="companyNameAr"
                      className="product-form-input"
                      placeholder="الاسم بالعربية"
                      required
                    />
                  </div>
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="companyNameEn">
                      <i className="fas fa-building"></i> الاسم الرسمي للشركة (إنجليزي)
                    </label>
                    <input
                      type="text"
                      id="companyNameEn"
                      className="product-form-input"
                      placeholder="Company Name in English"
                    />
                  </div>
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="commercialRegister">
                      <i className="fas fa-file-contract"></i> السجل التجاري / رقم الترخيص *
                    </label>
                    <input
                      type="text"
                      id="commercialRegister"
                      className="product-form-input"
                      placeholder="رقم السجل التجاري"
                      required
                    />
                  </div>
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="country">
                      <i className="fas fa-globe"></i> البلد
                    </label>
                    <input type="text" id="country" className="product-form-input" placeholder="البلد" />
                  </div>
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="city">
                      <i className="fas fa-city"></i> المدينة
                    </label>
                    <input type="text" id="city" className="product-form-input" placeholder="المدينة" />
                  </div>
                  <div className="product-form-group full-width">
                    <label className="product-form-label" htmlFor="address">
                      <i className="fas fa-map-marker-alt"></i> العنوان الرسمي
                    </label>
                    <textarea id="address" className="product-form-textarea" rows={2}></textarea>
                  </div>
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="industrySector">
                      <i className="fas fa-industry"></i> القطاع الصناعي الأساسي
                    </label>
                    <select id="industrySector" className="product-form-input">
                      <option value="">اختر القطاع</option>
                      <option value="مقاولات">مقاولات</option>
                      <option value="تصنيع مواد بناء">تصنيع مواد بناء</option>
                      <option value="تطوير عقاري">تطوير عقاري</option>
                      <option value="ورش ميكانيكية">ورش ميكانيكية</option>
                      <option value="مصانع">مصانع</option>
                      <option value="أخرى">أخرى</option>
                    </select>
                  </div>
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="companySize">
                      <i className="fas fa-chart-bar"></i> حجم الشركة
                    </label>
                    <select id="companySize" className="product-form-input">
                      <option value="">اختر الحجم</option>
                      <option value="ناشئة">ناشئة</option>
                      <option value="صغيرة">صغيرة</option>
                      <option value="متوسطة">متوسطة</option>
                      <option value="كبيرة">كبيرة</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="product-section" id="section-2">
                <h2 className="product-section-title">
                  <i className="fas fa-users"></i>جهات الاتصال الرئيسية
                </h2>
                <div className="product-form-grid">
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="mainContactName">
                      <i className="fas fa-user-tie"></i> اسم جهة الاتصال الرئيسية *
                    </label>
                    <input type="text" id="mainContactName" className="product-form-input" required />
                  </div>
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="mainContactPosition">
                      <i className="fas fa-briefcase"></i> الوظيفة/المنصب
                    </label>
                    <input type="text" id="mainContactPosition" className="product-form-input" />
                  </div>
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="mainContactPhone">
                      <i className="fas fa-phone"></i> رقم الهاتف المباشر
                    </label>
                    <input type="tel" id="mainContactPhone" className="product-form-input" />
                  </div>
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="mainContactEmail">
                      <i className="fas fa-envelope"></i> البريد الإلكتروني
                    </label>
                    <input type="email" id="mainContactEmail" className="product-form-input" />
                  </div>
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="technicalContactName">
                      <i className="fas fa-user-cog"></i> اسم جهة الاتصال الفنية
                    </label>
                    <input type="text" id="technicalContactName" className="product-form-input" />
                  </div>
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="technicalContactPhone">
                      <i className="fas fa-phone"></i> رقم هاتف الجهة الفنية
                    </label>
                    <input type="tel" id="technicalContactPhone" className="product-form-input" />
                  </div>
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="technicalContactEmail">
                      <i className="fas fa-envelope"></i> بريد الجهة الفنية
                    </label>
                    <input type="email" id="technicalContactEmail" className="product-form-input" />
                  </div>
                </div>
              </div>

              <div className="product-section" id="section-5">
                <h2 className="product-section-title">
                  <i className="fas fa-archive"></i> الأرشفة والمتابعة الداخلية
                </h2>
                <div className="product-form-group full-width">
                  <label className="product-form-label" htmlFor="clientAttachments">
                    <i className="fas fa-paperclip"></i> ملفات المرفقات (سجل تجاري، اتفاقيات، إلخ)
                  </label>
                  <input type="file" id="clientAttachments" className="product-file-input" multiple />
                  <label htmlFor="clientAttachments" className="product-file-label p15">
                    <i className="fas fa-cloud-upload-alt"></i> رفع المرفقات
                  </label>
                </div>
                <div className="product-form-group full-width">
                  <label className="product-form-label" htmlFor="internalNotes">
                    <i className="fas fa-sticky-note"></i> ملاحظات داخلية حول العميل
                  </label>
                  <textarea
                    id="internalNotes"
                    className="product-form-textarea"
                    rows={5}
                    placeholder="تقييم داخلي، ملاحظات المبيعات..."
                  ></textarea>
                </div>
                <div className="product-form-group">
                  <label className="product-form-label" htmlFor="addedDate">
                    <i className="fas fa-calendar-plus"></i> تاريخ الإضافة للأرشيف
                  </label>
                  <input
                    type="date"
                    id="addedDate"
                    className="product-form-input"
                    defaultValue={new Date().toISOString().split("T")[0]}
                    readOnly
                  />
                </div>
                <div className="product-form-group">
                  <label className="product-form-label" htmlFor="responsibleEmployee">
                    <i className="fas fa-user-check"></i> اسم الموظف المسؤول (مالك الحساب)
                  </label>
                  <input type="text" id="responsibleEmployee" className="product-form-input" placeholder="اسم الموظف" />
                </div>
              </div>
              <div className="product-form-actions">
                <button type="submit" className="product-submit-btn" id="save-client-btn">
                  <i className="fas fa-save"></i> حفظ بيانات العميل
                </button>
                <button type="reset" className="product-reset-btn">
                  <i className="fas fa-redo"></i> مسح النموذج
                </button>
                <Link href="/clients" className="product-cancel-btn">
                  <i className="fas fa-times"></i> إلغاء
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ChatButtons removed */}
    </>
  )
}
