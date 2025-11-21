"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatButtons } from "@/components/chat-buttons"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function CreateOfferPage() {
  return (
    <>
      <link rel="stylesheet" href="/css/add-product.css" />
      <ThemeToggle />
      <Header />

      <div className="product-container">
        <div className="product-card">
          <div className="product-header">
            <h1 className="product-title">
              <i className="fas fa-file-invoice-dollar"></i> إضافة عرض سعر جديد
            </h1>
          </div>

          <div className="product-body">
            <form id="quotationForm" className="product-form">
              <div className="product-section" id="section-1">
                <h2 className="product-section-title">
                  <i className="fas fa-info-circle"></i> ١. معلومات العرض الأساسية
                </h2>

                <div className="product-form-grid">
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="supplierCompany">
                      <i className="fas fa-building"></i> اسم الشركة
                    </label>
                    <input
                      type="text"
                      id="supplierCompany"
                      className="product-form-input"
                      defaultValue="مجموعة الثقة التجارية"
                      readOnly
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="quotationNumber">
                      <i className="fas fa-hashtag"></i> رقم عرض السعر (Quotation #) *
                    </label>
                    <input
                      type="text"
                      id="quotationNumber"
                      className="product-form-input"
                      placeholder="أدخل رقم العرض"
                      required
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="issueDate">
                      <i className="fas fa-calendar-check"></i> تاريخ الإصدار *
                    </label>
                    <input type="date" id="issueDate" className="product-form-input" required />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="expiryDate">
                      <i className="fas fa-calendar-times"></i> تاريخ الانتهاء/الصلاحية *
                    </label>
                    <input type="date" id="expiryDate" className="product-form-input" required />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="responsibleEmployee">
                      <i className="fas fa-user-tie"></i> اسم الموظف المسؤول *
                    </label>
                    <input
                      type="text"
                      id="responsibleEmployee"
                      className="product-form-input"
                      placeholder="أدخل اسم الموظف"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="product-section" id="section-2">
                <h2 className="product-section-title">
                  <i className="fas fa-user"></i> ٢. معلومات العميل
                </h2>

                <div className="product-form-grid">
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="clientName">
                      <i className="fas fa-user"></i> اسم العميل / اسم الشركة الطالبة *
                    </label>
                    <input
                      type="text"
                      id="clientName"
                      className="product-form-input"
                      placeholder="أدخل اسم العميل أو الشركة"
                      required
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="clientContact">
                      <i className="fas fa-user-check"></i> جهة الاتصال المسؤولة في شركة العميل
                    </label>
                    <input
                      type="text"
                      id="clientContact"
                      className="product-form-input"
                      placeholder="أدخل اسم جهة الاتصال"
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="clientPhone">
                      <i className="fas fa-phone"></i> رقم هاتف العميل
                    </label>
                    <input type="tel" id="clientPhone" className="product-form-input" placeholder="أدخل رقم الهاتف" />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="clientEmail">
                      <i className="fas fa-envelope"></i> بريد العميل الإلكتروني
                    </label>
                    <input
                      type="email"
                      id="clientEmail"
                      className="product-form-input"
                      placeholder="أدخل البريد الإلكتروني"
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="clientTaxId">
                      <i className="fas fa-file-invoice"></i> رقم الملف الضريبي للعميل
                    </label>
                    <input
                      type="text"
                      id="clientTaxId"
                      className="product-form-input"
                      placeholder="أدخل رقم الملف الضريبي"
                    />
                  </div>
                </div>
              </div>

              <div className="product-section" id="section-3">
                <h2 className="product-section-title">
                  <i className="fas fa-list"></i> ٣. تفاصيل المنتجات والخدمات (البنود)
                </h2>

                <div className="product-dynamic-container" id="itemsContainer">
                  <div className="product-supplier-card">
                    <div className="product-form-grid">
                      <div className="product-form-group">
                        <label className="product-form-label" htmlFor="itemProduct">
                          <i className="fas fa-cube"></i> رقم المنتج / الموديل *
                        </label>
                        <select id="itemProduct" className="product-form-input" required>
                          <option value="">اختر المنتج من قاعدة البيانات</option>
                          {/* Dynamic options */}
                        </select>
                      </div>

                      <div className="product-form-group full-width">
                        <label className="product-form-label" htmlFor="itemDescription">
                          <i className="fas fa-align-left"></i> وصف البند (الاسم الفني)
                        </label>
                        <input
                          type="text"
                          id="itemDescription"
                          className="product-form-input"
                          placeholder="سيتم ملء آليًا"
                        />
                      </div>

                      <div className="product-form-group full-width">
                        <label className="product-form-label" htmlFor="itemSpecs">
                          <i className="fas fa-cogs"></i> المواصفات الفنية الموجزة
                        </label>
                        <textarea
                          id="itemSpecs"
                          className="product-form-textarea"
                          rows={2}
                          placeholder="سيتم ملء آليًا"
                        ></textarea>
                      </div>

                      <div className="product-form-group">
                        <label className="product-form-label" htmlFor="itemUnit">
                          <i className="fas fa-balance-scale"></i> وحدة القياس
                        </label>
                        <select id="itemUnit" className="product-form-input">
                          <option value="قطعة">قطعة</option>
                          <option value="متر مربع">متر مربع</option>
                          <option value="طن">طن</option>
                          <option value="لتر">لتر</option>
                          <option value="طقم">طقم</option>
                        </select>
                      </div>

                      <div className="product-form-group">
                        <label className="product-form-label" htmlFor="itemQuantity">
                          <i className="fas fa-boxes"></i> الكمية المطلوبة *
                        </label>
                        <input
                          type="number"
                          id="itemQuantity"
                          className="product-form-input"
                          placeholder="أدخل الكمية"
                          min="1"
                          required
                        />
                      </div>

                      <div className="product-form-group">
                        <label className="product-form-label" htmlFor="itemUnitPrice">
                          <i className="fas fa-dollar-sign"></i> سعر الوحدة الصافي
                        </label>
                        <input
                          type="number"
                          id="itemUnitPrice"
                          className="product-form-input"
                          placeholder="سيتم ملء آليًا"
                          step="0.01"
                          min="0"
                        />
                      </div>

                      <div className="product-form-group">
                        <label className="product-form-label" htmlFor="itemDiscount">
                          <i className="fas fa-percent"></i> الخصم على الوحدة (%)
                        </label>
                        <input
                          type="number"
                          id="itemDiscount"
                          className="product-form-input"
                          placeholder="0"
                          step="0.1"
                          min="0"
                          max="100"
                        />
                      </div>

                      <div className="product-form-group">
                        <label className="product-form-label" htmlFor="itemSubtotal">
                          <i className="fas fa-calculator"></i> المجموع الفرعي للبند
                        </label>
                        <input type="number" id="itemSubtotal" className="product-form-input" readOnly />
                      </div>
                    </div>
                  </div>
                </div>

                <button type="button" className="add-btn">
                  <i className="fas fa-plus"></i> إضافة بند آخر
                </button>
              </div>

              <div className="product-section" id="section-4">
                <h2 className="product-section-title">
                  <i className="fas fa-money-check-alt"></i> ٤. الإجماليات والشروط المالية
                </h2>

                <div className="product-form-grid">
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="subtotal">
                      <i className="fas fa-sigma"></i> المجموع الفرعي لكافة البنود
                    </label>
                    <input type="number" id="subtotal" className="product-form-input" readOnly />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="packagingCost">
                      <i className="fas fa-box"></i> تكلفة التغليف والتجهيز
                    </label>
                    <input
                      type="number"
                      id="packagingCost"
                      className="product-form-input"
                      placeholder="0.00"
                      step="0.01"
                      min="0"
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="shippingCost">
                      <i className="fas fa-truck"></i> تكلفة الشحن والتسليم
                    </label>
                    <input
                      type="number"
                      id="shippingCost"
                      className="product-form-input"
                      placeholder="0.00"
                      step="0.01"
                      min="0"
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="vat">
                      <i className="fas fa-receipt"></i> إجمالي الضريبة المضافة (VAT)
                    </label>
                    <input
                      type="number"
                      id="vat"
                      className="product-form-input"
                      placeholder="0.00"
                      step="0.01"
                      min="0"
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="grandTotal">
                      <i className="fas fa-money-bill-wave"></i> إجمالي المبلغ النهائي المستحق
                    </label>
                    <input type="number" id="grandTotal" className="product-form-input" readOnly />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="currency">
                      <i className="fas fa-coins"></i> العملة المستخدمة في الفاتورة
                    </label>
                    <select id="currency" className="product-form-input">
                      <option value="USD">USD</option>
                      <option value="SAR">SAR</option>
                      <option value="AED">AED</option>
                      <option value="YER">YER</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="product-section" id="section-5">
                <h2 className="product-section-title">
                  <i className="fas fa-handshake"></i> ٥. الشروط التجارية واللوجستية
                </h2>

                <div className="product-form-grid">
                  <div className="product-form-group full-width">
                    <label className="product-form-label" htmlFor="paymentTerms">
                      <i className="fas fa-hand-holding-dollar"></i> شروط الدفع (تفصيل نسب الدفع)
                    </label>
                    <textarea
                      id="paymentTerms"
                      className="product-form-textarea"
                      rows={3}
                      placeholder="أدخل تفاصيل شروط الدفع"
                    ></textarea>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="deliveryLocation">
                      <i className="fas fa-map-marker-alt"></i> مكان التسليم (الوجهة)
                    </label>
                    <input
                      type="text"
                      id="deliveryLocation"
                      className="product-form-input"
                      placeholder="أدخل مكان التسليم"
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="incoterm">
                      <i className="fas fa-globe"></i> شروط التجارة الدولية المعتمدة (Incoterm)
                    </label>
                    <select id="incoterm" className="product-form-input">
                      <option value="EXW">EXW</option>
                      <option value="FOB">FOB</option>
                      <option value="CIF">CIF</option>
                      <option value="DDP">DDP</option>
                    </select>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="deliveryTime">
                      <i className="fas fa-clock"></i> المهلة الزمنية للتسليم
                    </label>
                    <input type="text" id="deliveryTime" className="product-form-input" placeholder="مثال: 30 يومًا" />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="warrantyPeriod">
                      <i className="fas fa-shield-alt"></i> فترة الضمان المُقدمة على المنتج
                    </label>
                    <input type="text" id="warrantyPeriod" className="product-form-input" placeholder="مثال: 12 شهرًا" />
                  </div>
                </div>
              </div>

              <div className="product-section" id="section-6">
                <h2 className="product-section-title">
                  <i className="fas fa-sticky-note"></i> ٥. ملاحظات إضافية
                </h2>

                <div className="product-form-grid">
                  <div className="product-form-group full-width">
                    <label className="product-form-label" htmlFor="technicalNotes">
                      <i className="fas fa-tools"></i> ملاحظات فنية
                    </label>
                    <textarea
                      id="technicalNotes"
                      className="product-form-textarea"
                      rows={3}
                      placeholder="أدخل ملاحظات فنية"
                    ></textarea>
                  </div>

                  <div className="product-form-group full-width">
                    <label className="product-form-label" htmlFor="generalNotes">
                      <i className="fas fa-comment"></i> ملاحظات عامة
                    </label>
                    <textarea
                      id="generalNotes"
                      className="product-form-textarea"
                      rows={3}
                      placeholder="أدخل ملاحظات عامة"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="product-form-actions">
                <button type="submit" className="product-submit-btn" id="save-quotation-btn">
                  <i className="fas fa-save"></i> حفظ عرض السعر
                </button>
                <button type="button" className="product-submit-btn" id="generate-pdf-btn">
                  <i className="fas fa-file-pdf"></i> إنشاء PDF
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
