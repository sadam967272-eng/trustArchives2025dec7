"use client"

import { useState } from "react"
import { getClients } from "@/lib/data"
import { ClientCard } from "@/components/client-card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatButtons } from "@/components/chat-buttons"
import Link from "next/link"

export default function ClientsPage() {
  const allClients = getClients()
  const [searchTerm, setSearchTerm] = useState("")
  const [countryFilter, setCountryFilter] = useState("")
  const [industryFilter, setIndustryFilter] = useState("")

  // Filter clients
  const filteredClients = allClients.filter((client) => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCountry = countryFilter ? client.country === countryFilter : true
    const matchesIndustry = industryFilter ? client.industry === industryFilter : true
    return matchesSearch && matchesCountry && matchesIndustry
  })

  return (
    <>
      <link rel="stylesheet" href="/css/clients-board.css" />
      <Header />

      <section id="clients-board" className="section">
        <div className="container">
          <div className="clients-board-header">
            <div className="clients-board-text">
              <h1 className="clients-board-title">
                <i className="fa-solid fa-users"></i> لوحة العملاء
              </h1>
              <p className="clients-board-subtitle">إدارة ومتابعة بيانات العملاء وعلاقاتهم التجارية مع الشركة</p>
            </div>

            <div className="clients-board-stats-container">
              <div className="clients-board-stat-box">
                <div className="clients-board-stat-number" id="clientsCount">
                  {allClients.length}
                </div>
                <div className="clients-board-stat-label"> العدد الكلي للعملاء </div>
              </div>
              <div className="clients-board-stat-box">
                <div className="clients-board-stat-number">
                  <i className="fa-solid fa-user-plus"></i>
                </div>
                <Link href="/add-customer" className="clients-board-button">
                  إضافة عميل جديد ➕
                </Link>
              </div>
            </div>
          </div>

          <div className="filters-container">
            <div className="filters-grid">
              <div className="filter-group">
                <input
                  className="sreach"
                  type="text"
                  id="searchInput"
                  placeholder="&#128269;   ابحث عن عميل "
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="filter-group">
                <select
                  id="countryFilter"
                  className="clients-filter-select"
                  onChange={(e) => setCountryFilter(e.target.value)}
                >
                  <option value="">جميع البلدان</option>
                  <option value="السعودية">السعودية</option>
                  <option value="الإمارات">الإمارات</option>
                  <option value="قطر">قطر</option>
                </select>
              </div>
              <div className="filter-group">
                <select
                  id="industryFilter"
                  className="clients-filter-select"
                  onChange={(e) => setIndustryFilter(e.target.value)}
                >
                  <option value="">جميع القطاعات</option>
                  <option value="التجزئة">التجزئة</option>
                  <option value="الجملة">الجملة</option>
                  <option value="التصنيع">التصنيع</option>
                  <option value="الخدمات">الخدمات</option>
                </select>
              </div>
              <div className="filter-group">
                <button
                  className="clear-filters-btn"
                  onClick={() => {
                    setSearchTerm("")
                    setCountryFilter("")
                    setIndustryFilter("")
                  }}
                >
                  مسح الفلاتر
                </button>
              </div>
            </div>
          </div>

          <div id="clientsGrid" className="clients-grid">
            {filteredClients.map((client) => (
              <ClientCard key={client.id} client={client} />
            ))}
            {filteredClients.length === 0 && (
              <div id="noClients" className="no-clients-message">
                <div className="no-clients-icon">👥</div>
                <h3 className="no-clients-title">لا توجد عملاء</h3>
                <p>لم يتم العثور على عملاء يطابقون معايير البحث</p>
              </div>
            )}
          </div>
        </div>
      </section>

      
      <ChatButtons />
    </>
  )
}
