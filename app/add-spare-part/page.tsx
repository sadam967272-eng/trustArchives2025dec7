"use client"

import { Header } from "@/components/header"
import { ChatButtons } from "@/components/chat-buttons"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function AddSparePartPage() {
  return (
    <>
      <link rel="stylesheet" href="/css/add-product.css" />
      <ThemeToggle />
      <Header />

      <div className="product-container">
        <div className="product-card">
          <div className="product-header">
            <h1 className="product-title">
              <i className="fas fa-cogs"></i> إضافة قطعة غيار جديدة
            </h1>
          </div>

          <div className="product-body">
            <form id="sparePartForm" className="product-form">
              <div className="product-section" id="section-1">
                <h2 className="product-section-title">
                  <i className="fas fa-link"></i> ٢. الربط بالمنتج الأساسي (الماكينة)
                </h2>

                <div className="product-form-grid">
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="linkedProduct">
                      <i className="fas fa-cube"></i> المنتج الأساسي المُرتبط *
                    </label>
                    <select id="linkedProduct" className="product-form-input" required>
                      <option value="">اختر المنتج الأساسي</option>
                      {/* Dynamic options */}
                    </select>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="spareSubCategory">
                      <i className="fas fa-folder-open"></i> الفئة الفرعية لقطعة الغيار
                    </label>
                    <select id="spareSubCategory" className="product-form-input">
                      <option value="">اختر الفئة الفرعية</option>
                      <option value="كهربائية">كهربائية</option>
                      <option value="ميكانيكية">ميكانيكية</option>
                      <option value="استهلاكية">استهلاكية</option>
                      <option value="هيكلية">هيكلية</option>
                    </select>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="partLocation">
                      <i className="fas fa-map-marker-alt"></i> موقع القطعة في المنتج
                    </label>
                    <input
                      type="text"
                      id="partLocation"
                      className="product-form-input"
                      placeholder="مثال: مجموعة الفرامل أو بورد التحكم"
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="partManualNumber">
                      <i className="fas fa-book"></i> رقم دليل الأجزاء (Part Manual Number) *
                    </label>
                    <input
                      type="text"
                      id="partManualNumber"
                      className="product-form-input"
                      placeholder="أدخل رقم دليل الأجزاء"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="product-section" id="section-2">
                <h2 className="product-section-title">
                  <i className="fas fa-info-circle"></i> ٢. المعلومات الأساسية لقطعة الغيار
                </h2>

                <div className="product-form-grid">
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="partName">
                      <i className="fas fa-tag"></i> اسم القطعة *
                    </label>
                    <input
                      type="text"
                      id="partName"
                      className="product-form-input"
                      placeholder="أدخل الاسم الفني للقطعة"
                      required
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="partNumber">
                      <i className="fas fa-barcode"></i> رقم القطعة (Part Number/SKU) *
                    </label>
                    <input
                      type="text"
                      id="partNumber"
                      className="product-form-input"
                      placeholder="أدخل رقم القطعة"
                      required
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="partBrand">
                      <i className="fas fa-copyright"></i> العلامة التجارية (الخاصة بالقطعة)
                    </label>
                    <input
                      type="text"
                      id="partBrand"
                      className="product-form-input"
                      placeholder="أدخل العلامة التجارية"
                    />
                  </div>
                </div>

                <div className="product-form-group full-width">
                  <label className="product-form-label" htmlFor="partDescription">
                    <i className="fas fa-align-left"></i> وصف القطعة *
                  </label>
                  <textarea
                    id="partDescription"
                    className="product-form-textarea"
                    rows={4}
                    placeholder="شرح مختصر لوظيفتها"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="product-section" id="section-3">
                <h2 className="product-section-title">
                  <i className="fas fa-money-check-alt"></i> السعر والمخزون
                </h2>

                <div className="product-form-grid">
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="partPrice">
                      <i className="fas fa-dollar-sign"></i> سعر البيع
                    </label>
                    <div className="product-price-input">
                      <span className="product-currency">$</span>
                      <input
                        type="number"
                        id="partPrice"
                        className="product-form-input"
                        placeholder="0.00"
                        step="0.01"
                        min="0"
                      />
                    </div>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="partInventoryQuantity">
                      <i className="fas fa-warehouse"></i> الكمية في المخزون
                    </label>
                    <input
                      type="number"
                      id="partInventoryQuantity"
                      className="product-form-input"
                      placeholder="مثال: 500"
                      step="1"
                      min="0"
                    />
                  </div>
                </div>

                <div className="product-form-group full-width mt20">
                  <label className="product-form-label" htmlFor="partImages">
                    <i className="fas fa-images"></i> صور للقطعة
                  </label>
                  <input type="file" id="partImages" className="product-file-input" multiple accept="image/*" />
                  <label htmlFor="partImages" className="product-file-label p15">
                    <i className="fas fa-cloud-upload-alt"></i> اضغط لرفع صور القطعة
                  </label>
                </div>
              </div>

              <div className="product-form-actions">
                <button type="submit" className="product-submit-btn" id="save-spare-part-btn">
                  <i className="fas fa-save"></i> حفظ القطعة
                </button>
                <button type="reset" className="product-reset-btn">
                  <i className="fas fa-redo"></i> مسح النموذج
                </button>
                <Link href="/" className="product-cancel-btn">
                  <i className="fas fa-times"></i> إلغاء
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ChatButtons />
    </>
  )
}
