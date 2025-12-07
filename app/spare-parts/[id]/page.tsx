import { Header } from "@/components/header"
import { ChatButtons } from "@/components/chat-buttons"
import Link from "next/link"
import { AdminControls } from "@/components/admin-controls"

export default function SparePartPage({ params }: { params: { id: string } }) {
  return (
    <>
      <link rel="stylesheet" href="/css/product.css" />
      <link rel="stylesheet" href="/css/responsive-product.css" />

      <Header />

      <div className="container">
        <AdminControls id={params.id} editUrl="/add-spare-part" type="قطعة الغيار" />

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
                        <i className="fas fa-link"></i>
                        <span>المنتج المرتبط</span>
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-folder-open"></i>
                        <span>محركات</span>
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-barcode"></i>
                        <span>SP-{params.id}</span>
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-copyright"></i>
                        <span>Bosch</span>
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-user"></i>
                        <span>المسؤول</span>
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-calendar"></i>
                        <span>2023-11-15</span>
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-book"></i>
                        <span>MN-500</span>
                      </div>
                    </div>
                    <h1 className="product-title">قطعة غيار {params.id}</h1>
                    <p className="product-description">
                      وصف تفصيلي لقطعة الغيار واستخداماتها وتوافقها مع المنتجات المختلفة.
                    </p>
                  </div>

                  <div className="main-image rel">
                    <img
                      src="/placeholder.svg?height=450&width=800"
                      alt="صورة القطعة"
                      className="w-full h-auto object-cover rounded-lg"
                    />
                    <button title="تحميل الصورة" className="download-image-btn">
                      <i className="fas fa-download"></i>
                      تحميل الصورة
                    </button>
                  </div>

                  <div className="image-thumbnails"></div>
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
                        <div className="price-amount">$150</div>
                      </div>
                      <div className="price-item">
                        <div className="pricing-label">
                          <i className="fa-solid fa-tags"></i> سعر البيع المقترح
                        </div>
                        <div className="price-amount">$200</div>
                      </div>
                      <div className="price-item">
                        <div className="pricing-label">
                          <i className="fa-solid fa-boxes-stacked"></i> الحد الأدنى (MOQ)
                        </div>
                        <div className="price-amount">10</div>
                      </div>
                      <div className="price-item">
                        <div className="pricing-label">
                          <i className="fa-solid fa-warehouse"></i> الكمية في المخزون
                        </div>
                        <div className="price-amount">500</div>
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
                  <div className="tab-btn active">الربط بالمنتج الأساسي</div>
                  <div className="tab-btn">المعلومات الأساسية</div>
                  <div className="tab-btn">المواصفات الفنية</div>
                  <div className="tab-btn">التسعير والمخزون</div>
                  <div className="tab-btn">التوثيق والمرفقات</div>
                </div>

                {/* General Info Tab */}
                <div className="tab-content active">
                  <div className="general-info-grid">
                    <div className="general-info-item">
                      <div className="label">
                        <i className="fas fa-link"></i> حالة الربط
                      </div>
                      <div className="value">مرتبط بمنتج</div>
                    </div>
                    <div className="general-info-item">
                      <div className="label">
                        <i className="fas fa-cube"></i> المنتج الأساسي المُرتبط
                      </div>
                      <div className="value">خلاطة خرسانة</div>
                    </div>
                    <div className="general-info-item">
                      <div className="label">
                        <i className="fas fa-folder-open"></i> الفئة الفرعية
                      </div>
                      <div className="value">محركات</div>
                    </div>
                    <div className="general-info-item">
                      <div className="label">
                        <i className="fas fa-barcode"></i> رقم القطعة (Part Number)
                      </div>
                      <div className="value">PN-123456</div>
                    </div>
                    <div className="general-info-item">
                      <div className="label">
                        <i className="fas fa-copyright"></i> العلامة التجارية للقطعة
                      </div>
                      <div className="value">Bosch</div>
                    </div>
                    <div className="general-info-item">
                      <div className="label">
                        <i className="fas fa-map-marker-alt"></i> موقع القطعة في المنتج
                      </div>
                      <div className="value">المحرك الرئيسي</div>
                    </div>
                    <div className="general-info-item">
                      <div className="label">
                        <i className="fas fa-book"></i> رقم دليل الأجزاء
                      </div>
                      <div className="value">MN-500</div>
                    </div>
                    <div className="general-info-item">
                      <div className="label">
                        <i className="fas fa-barcode"></i> الرقم التسلسلي (System Serial)
                      </div>
                      <div className="value">SP-{params.id}</div>
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
                      <div className="value">2023-11-15</div>
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
