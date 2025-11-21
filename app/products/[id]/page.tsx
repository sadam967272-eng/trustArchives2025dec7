import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatButtons } from "@/components/chat-buttons"
import Link from "next/link"

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <>
      <link rel="stylesheet" href="/css/product.css" />
      <link rel="stylesheet" href="/css/responsive-product.css" />

      <Header />

      <div className="container">
        <div className="product-container">
          <div id="product-details">
            {/* Upper Section: Product Layout */}
            <div className="product-layout">
              {/* Right Column: Product Info and Main Image */}
              <div className="right-column">
                <div className="product-gallery">
                  <div className="product-info">
                    <div className="product-meta">
                      <div className="meta-item">
                        <i className="fas fa-box"></i>
                        <span>ماكينات البناء</span>
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-user"></i>
                        <span>المسؤول</span>
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-calendar"></i>
                        <span>2023-10-01</span>
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-barcode"></i>
                        <span>PRD-{params.id}</span>
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-layer-group"></i>
                        <span>خلاطات</span>
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-copyright"></i>
                        <span>CAT</span>
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-cube"></i>
                        <span>2024</span>
                      </div>
                    </div>
                    <h1 className="product-title">خلاطة خرسانة مركزية {params.id}</h1>
                    <p className="product-description">
                      خلاطة خرسانة عالية الكفاءة مناسبة للمشاريع الكبيرة والمتوسطة. تتميز بمتانة عالية وسهولة في
                      الصيانة.
                    </p>
                  </div>

                  <div className="main-image rel">
                    <img
                      src="/placeholder.svg?height=450&width=800"
                      alt="صورة المنتج"
                      className="w-full h-auto object-cover rounded-lg"
                    />
                    <button title="تحميل الصورة" className="download-image-btn">
                      <i className="fas fa-download"></i>
                      تحميل الصورة
                    </button>
                  </div>

                  <div className="image-thumbnails">{/* Thumbnails would go here */}</div>
                </div>
              </div>

              {/* Left Column: Price, Shipping, Sidebar */}
              <div className="left-column">
                {/* Product Price */}
                <div className="price-container">
                  <div className="price-title">
                    <i className="fa-solid fa-money-check-dollar"></i>
                    الاسعار
                  </div>

                  <div className="price-details">
                    <div className="price-grid">
                      <div className="price-item">
                        <div className="pricing-label">
                          <i className="fa-solid fa-coins"></i> سعر التكلفة
                        </div>
                        <div className="price-amount">$50,000</div>
                      </div>
                      <div className="price-item">
                        <div className="pricing-label">
                          <i className="fa-solid fa-tags"></i> سعر البيع
                        </div>
                        <div className="price-amount">$65,000</div>
                      </div>
                      <div className="price-item">
                        <div className="pricing-label">
                          <i className="fa-solid fa-scale-balanced"></i> وحدة التسعير
                        </div>
                        <div className="price-amount">قطعة</div>
                      </div>
                      <div className="price-item">
                        <div className="pricing-label">
                          <i className="fa-solid fa-boxes-stacked"></i> الحد الأدنى (MOQ)
                        </div>
                        <div className="price-amount">1</div>
                      </div>
                      <div className="price-item">
                        <div className="pricing-label">
                          <i className="fa-solid fa-percent"></i> الخصم
                        </div>
                        <div className="price-amount">5%</div>
                      </div>
                      <div className="price-item">
                        <div className="pricing-label">
                          <i className="fa-solid fa-file-invoice-dollar"></i> الضريبة
                        </div>
                        <div className="price-amount">15%</div>
                      </div>
                      <div className="price-item span-all">
                        <div className="pricing-label">
                          <i className="fa-solid fa-hand-holding-dollar"></i> شروط الدفع
                        </div>
                        <div className="price-amount">50% مقدم، 50% عند التسليم</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Actions */}
                <div className="product-actions">
                  <button className="product-btn Favorite-btn">
                    <i className="fas fa-file-pdf"></i>
                    انشاء عرض سعر
                  </button>
                  <button className="product-btn share-btn bg-extra2">
                    <i className="fa-solid fa-file-pdf"></i>
                    تحميل الكاتلوج
                  </button>
                </div>
              </div>
            </div>

            {/* Lower Section: Product Tabs */}
            <div className="lower-section">
              <div className="product-tabs">
                <div className="tabs-header">
                  <div className="tab-btn active">بيانات عامة</div>
                  <div className="tab-btn">استخدامات المنتج</div>
                  <div className="tab-btn">مواصفات المنتج</div>
                  <div className="tab-btn">الميزات و السلبيات</div>
                  <div className="tab-btn">ملفات و روابط</div>
                  <div className="tab-btn">الموردون</div>
                </div>

                {/* General Info Tab */}
                <div className="tab-content active">
                  <div className="general-info-grid">
                    <div className="general-info-item">
                      <div className="label">
                        <i className="fas fa-folder"></i> الفئة الرئيسية
                      </div>
                      <div className="value">ماكينات البناء</div>
                    </div>
                    <div className="general-info-item">
                      <div className="label">
                        <i className="fas fa-layer-group"></i> الفئة الفرعية
                      </div>
                      <div className="value">خلاطات</div>
                    </div>
                    <div className="general-info-item">
                      <div className="label">
                        <i className="fas fa-copyright"></i> العلامة التجارية
                      </div>
                      <div className="value">CAT</div>
                    </div>
                    <div className="general-info-item">
                      <div className="label">
                        <i className="fas fa-cube"></i> الموديل
                      </div>
                      <div className="value">2024</div>
                    </div>
                    <div className="general-info-item">
                      <div className="label">
                        <i className="fas fa-tags"></i> الكلمات المفتاحية
                      </div>
                      <div className="value">
                        <ul className="disc-list pr18 m0">
                          <li>خرسانة</li>
                          <li>بناء</li>
                          <li>معدات ثقيلة</li>
                        </ul>
                      </div>
                    </div>
                    <div className="general-info-item">
                      <div className="label">
                        <i className="fas fa-user"></i> المسجل
                      </div>
                      <div className="value">Admin</div>
                    </div>
                    <div className="general-info-item">
                      <div className="label">
                        <i className="fas fa-calendar-alt"></i> تاريخ الإضافة
                      </div>
                      <div className="value">2023-10-01</div>
                    </div>
                    <div className="general-info-item">
                      <div className="label">
                        <i className="fas fa-barcode"></i> الكود
                      </div>
                      <div className="value">PRD-{params.id}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Added back button */}
        <div className="download-section" style={{ marginTop: "20px", textAlign: "center" }}>
          <Link
            href="/products"
            className="download-btn"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "var(--secondary)",
              color: "#fff",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            <i className="fa fa-angle-double-right"></i> العودة الى لوحة المنتجات
          </Link>
        </div>
      </div>

        
      <ChatButtons />
    </>
  )
}
