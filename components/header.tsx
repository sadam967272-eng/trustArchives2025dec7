"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`} id="header">
      <Link href="/" className="logo-container">
        <div className="logo"> </div>
        <div className="logo-text">أرشيف الثقة التجارية</div>
      </Link>
      <button className="nav-toggle" aria-label="Toggle navigation menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <i className="fas fa-align-left"></i>
      </button>
      <nav className={`main-menu ${isMenuOpen ? "active" : ""}`}>
        <Link href="/" className={`menu-item ${pathname === "/" ? "active" : ""}`}>
          <i className="fas fa-home"></i> الرئيسية
        </Link>
        <div className="dropdown menu-item">
          <a href="#" className="dropdown-toggle">
            <i className="fas fa-plus-circle"></i> إضافة <i className="fas fa-caret-down"></i>
          </a>
          <div className="dropdown-menu">
            <Link href="/add-product" className="dropdown-item">
              <i className="fas fa-plus-circle"></i> إضافة منتج
            </Link>
            <Link href="/add-supplier" className="dropdown-item">
              <i className="fas fa-truck-loading "></i> إضافة مورد
            </Link>
            <Link href="/add-customer" className="dropdown-item">
              <i className="fas fa-address-book"></i> اضافة عميل
            </Link>
            <Link href="/add-spare-part" className="dropdown-item">
              {" "}
              <i className="fas fa-cogs"></i> إضافة قطع غيار
            </Link>
            <Link href="/add-operational-accessories" className="dropdown-item">
              {" "}
              <i className="fas fa-tools"></i> إضافة مستلزمات التشغيل
            </Link>
            <Link href="/offers/create" className="dropdown-item">
              <i className="far fa-credit-card"></i> انشاء عرض سعر
            </Link>
          </div>
        </div>
        <Link href="/products" className={`menu-item ${pathname === "/products" ? "active" : ""}`}>
          <i className="fa-solid fa-cart-plus"></i> المنتجات
        </Link>
        <Link href="/suppliers" className={`menu-item ${pathname === "/suppliers" ? "active" : ""}`}>
          <i className="fas fa-truck"></i> الموردين
        </Link>
        <Link href="/clients" className={`menu-item ${pathname === "/clients" ? "active" : ""}`}>
          <i className="fas fa-truck"></i> العملاء
        </Link>
        <Link href="/profile" className={`menu-item ${pathname === "/profile" ? "active" : ""}`}>
          <i className="fas fa-user"></i> ملفي الشخصي
        </Link>
        <Link href="/login" className="menu-item logout-btn">
          <i className="fas fa-sign-out-alt"></i> تسجيل الخروج
        </Link>
      </nav>
    </header>
  )
}
