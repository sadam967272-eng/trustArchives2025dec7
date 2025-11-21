"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"

export default function AddUserPage() {
  const [phones, setPhones] = useState<string[]>([""])

  const addPhoneField = () => {
    setPhones([...phones, ""])
  }

  const handlePhoneChange = (index: number, value: string) => {
    const newPhones = [...phones]
    newPhones[index] = value
    setPhones(newPhones)
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <ThemeToggle />

      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto bg-card rounded-xl shadow-lg p-8 border border-border">
          <div className="flex justify-between items-center mb-8 border-b border-border pb-4">
            <h1 className="text-2xl font-bold text-primary">📝 تسجيل عضو جديد</h1>
            <button
              onClick={() => window.history.back()}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">الاسم الكامل *</label>
                <input
                  type="text"
                  required
                  className="w-full p-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">البلد *</label>
                <input
                  type="text"
                  required
                  className="w-full p-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">العمر *</label>
                <input
                  type="number"
                  required
                  placeholder="25"
                  min="16"
                  max="100"
                  className="w-full p-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">السكن *</label>
                <input
                  type="text"
                  required
                  className="w-full p-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">اسم المستخدم *</label>
                <input
                  type="text"
                  required
                  placeholder="بالاحرف الانجليزية"
                  className="w-full p-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">كلمة السر *</label>
                <input
                  type="password"
                  required
                  placeholder="كلمة المرور"
                  className="w-full p-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">الدور *</label>
              <select
                required
                className="w-full p-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              >
                <option value="">اختر الدور</option>
                <option value="member">عضو</option>
                <option value="admin">مدير</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">الصورة الشخصية</label>
              <input
                type="file"
                accept="image/*"
                className="w-full p-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
              />
            </div>

            <div className="border-t border-border pt-6 mt-6">
              <h4 className="text-lg font-semibold mb-4 text-primary">معلومات التواصل</h4>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">أرقام الهواتف *</label>
                  {phones.map((phone, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => handlePhoneChange(index, e.target.value)}
                        placeholder="+966 50 123 4567"
                        className="flex-1 p-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        required
                      />
                      {index === phones.length - 1 && (
                        <button
                          type="button"
                          onClick={addPhoneField}
                          className="p-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                        >
                          <i className="fa fa-plus" aria-hidden="true"></i>
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">رقم الواتساب *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+966 50 123 4567"
                    className="w-full p-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">البريد الإلكتروني *</label>
                  <input
                    type="email"
                    required
                    placeholder="example@email.com"
                    className="w-full p-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">ملاحظات</label>
                  <textarea
                    rows={2}
                    className="w-full p-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-6 border-t border-border">
              <button
                type="submit"
                className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25"
              >
                تأكيد العضوية
              </button>
              <button
                type="button"
                onClick={() => window.history.back()}
                className="flex-1 bg-muted text-muted-foreground py-3 rounded-lg font-bold hover:bg-muted/80 transition-all"
              >
                إلغاء
              </button>
            </div>
          </form>
        </div>
      </main>

     
    </div>
  )
}
