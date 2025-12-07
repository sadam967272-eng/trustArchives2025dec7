"use client"

import { useState } from "react"
import { getProducts, PRODUCT_CATEGORIES } from "@/lib/data"
import { ProductCard } from "@/components/product-card"
import { Header } from "@/components/header"
import { ChatButtons } from "@/components/chat-buttons"

export default function ProductsPage() {
  const allProducts = getProducts()
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("")
  const [viewMode, setViewMode] = useState("compact-grid")

  // Filter products
  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter ? product.category === categoryFilter : true
    return matchesSearch && matchesCategory
  })

  // Group products by type for display sections
  const products = filteredProducts.filter((p) => p.type === "product" || !p.type)
  const accessories = filteredProducts.filter((p) => p.type === "accessory")
  const spareParts = filteredProducts.filter((p) => p.type === "spare-part")

  return (
    <>
      <link rel="stylesheet" href="/css/products-board.css" />
      <Header />
      {/* Sections Navigation */}
      <div
        className="sections-nav"
        style={{
          paddingTop: "5rem",
          marginTop: "5rem",
          marginBottom: "0",
        }}
      >
        <h3
          style={{
            fontSize: "1.4rem",
            fontWeight: "bold",
            marginBottom: "0.75rem",
            textAlign: "center",
            color: "var(--primary-color)",
          }}
        >
          「 الاقسام 」
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "0.75rem",
            justifyContent: "center", // Align to start (right in RTL)
            flexWrap: "nowrap",
            overflowX: "auto",
            paddingBottom: "0.5rem",
          }}
        >
          <button
            onClick={() => document.getElementById("products-board")?.scrollIntoView({ behavior: "smooth" })}
            className="nav-section-btn"
            style={{
              padding: "0.4rem 0.8rem",
              backgroundColor: "var(--header-color)",
              color: "var(--light-color)",
              borderRadius: "var(--radius)",
              border: "1px solid var(--border)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.775rem",
              fontWeight: "500",
              whiteSpace: "nowrap",
            }}
          >
            <i className="fa-solid fa-cart-plus"></i> المنتجات
          </button>
          <button
            onClick={() =>
              document.getElementById("operational-accessories-board")?.scrollIntoView({ behavior: "smooth" })
            }
            className="nav-section-btn"
            style={{
              padding: "0.4rem 0.8rem",
              backgroundColor: "var(--header-color)",
              color: "var(--light-color)",
              borderRadius: "var(--radius)",
              border: "1px solid var(--border)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.775rem",
              fontWeight: "500",
              whiteSpace: "nowrap",
            }}
          >
            <i className="fas fa-tools"></i> مستلزمات التشغيل
          </button>
          <button
            onClick={() => document.getElementById("spare-parts-board")?.scrollIntoView({ behavior: "smooth" })}
            className="nav-section-btn"
            style={{
              padding: "0.4rem 0.8rem",
              backgroundColor: "var(--header-color)",
              color: "var(--light-color)",
              borderRadius: "var(--radius)",
              border: "1px solid var(--border)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.775rem",
              fontWeight: "500",
              whiteSpace: "nowrap",
            }}
          >
            <i className="fas fa-cogs"></i> قطع الغيار
          </button>
        </div>
      </div>
      {/* Products Section */}
      <section id="products-board" className="section">
        <div className="container">
          {/* Filters */}
          <div className="filters-container">
            <h2 className="section-title">
              <i className="fa-solid fa-cart-plus"></i>المنتجات
            </h2>

            <div className="filters-grid">
              <div className="filter-group">
                <input
                  className="sreach"
                  type="text"
                  id="searchInput"
                  placeholder="&#128269;   ابحث عن منتج "
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="filter-group">
                <select id="categoryFilter" onChange={(e) => setCategoryFilter(e.target.value)}>
                  <option value="">جميع الفئات</option>
                  {Object.entries(PRODUCT_CATEGORIES).map(([category, subCategories]) => (
                    <optgroup key={category} label={category}>
                      {subCategories.map((subCat) => (
                        <option key={subCat} value={subCat}>
                          {subCat}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>
              <div className="filter-group">
                <select id="supplierFilter">
                  <option value="">جميع الموردين</option>
                </select>
              </div>
              <div className="filter-group">
                <select id="userFilter">
                  <option value="">جميع المستخدمين</option>
                </select>
              </div>
              <div className="filter-group">
                <select id="sortFilter">
                  <option value="date">الأحدث أولاً</option>
                  <option value="price-high">السعر: عالي إلى منخفض</option>
                  <option value="price-low">السعر: منخفض إلى عالي</option>
                </select>
              </div>
              <div className="filter-group">
                <button
                  className="clear-filters-btn"
                  onClick={() => {
                    setSearchTerm("")
                    setCategoryFilter("")
                  }}
                >
                  مسح الفلاتر
                </button>
              </div>
            </div>
          </div>

          {/* View Mode Selector */}
          <div className="view-mode-container">
            <label htmlFor="viewMode">
              <i className="fa-solid fa-bars"></i> اسلوب العرض{" "}
            </label>
            <select id="viewMode" value={viewMode} onChange={(e) => setViewMode(e.target.value)}>
              <option value="compact-grid">شبكة</option>
              <option value="grid">اكثر اتساعاً</option>
              <option value="list">قائمة</option>
              <option value="small-list">قائمة اصغر</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className={`products-grid ${viewMode}`} id="productsGrid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            {products.length === 0 && (
              <div id="noResults" className="no-results">
                <div className="no-results-icon">🔍</div>
                <h3 className="no-results-title">لا توجد منتجات</h3>
                <p className="no-results-text">لم يتم العثور على منتجات تطابق معايير البحث الحالية</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section id="operational-accessories-board" className="section">
        <div className="container">
          <div className="filters-container">
            <h2 className="section-title">
              <i className="fas fa-tools"></i> مستلزمات التشغيل
            </h2>
            {/* Simplified filters for accessories for now */}
          </div>
          <div className={`products-grid ${viewMode}`} id="accessoriesGrid">
            {accessories.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Spare Parts Section */}
      <section id="spare-parts-board" className="section">
        <div className="container">
          <div className="filters-container">
            <h2 className="section-title">
              <i className="fas fa-cogs"></i> قطع الغيار
            </h2>
            {/* Simplified filters for spare parts for now */}
          </div>
          <div className={`products-grid ${viewMode}`} id="partsGrid">
            {spareParts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <ChatButtons />
    </>
  )
}
