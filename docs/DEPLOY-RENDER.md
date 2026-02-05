# Hướng Dẫn Deploy OpenClawBox lên Render

## Bước 1: Chuẩn bị Repository

### 1.1 Tạo file .gitignore (nếu chưa có)
```bash
# Đã tạo sẵn
```

### 1.2 Push code lên GitHub
```bash
cd /Users/hnam/Desktop/openclawbox-landingpage

# Khởi tạo git (nếu chưa có)
git init

# Thêm tất cả files
git add .

# Commit
git commit -m "Initial commit - OpenClawBox Landing Page"

# Tạo repo trên GitHub, sau đó:
git remote add origin https://github.com/YOUR_USERNAME/openclawbox-landingpage.git
git branch -M main
git push -u origin main
```

## Bước 2: Deploy lên Render

### 2.1 Đăng nhập Render
1. Truy cập: https://render.com
2. Đăng nhập bằng GitHub

### 2.2 Tạo Static Site
1. Click **"New +"** → **"Static Site"**
2. Connect repository `openclawbox-landingpage`
3. Cấu hình:

| Field | Value |
|-------|-------|
| **Name** | `openclawbox` |
| **Branch** | `main` |
| **Root Directory** | _(để trống)_ |
| **Build Command** | _(để trống)_ |
| **Publish Directory** | `.` |

4. Click **"Create Static Site"**

### 2.3 Đợi Deploy
- Render sẽ tự động build và deploy
- Thường mất 1-2 phút
- Khi xong, bạn sẽ có URL: `https://openclawbox.onrender.com`

## Bước 3: Custom Domain (Tùy chọn)

### 3.1 Thêm Custom Domain
1. Vào Dashboard → Static Site của bạn
2. Click **"Settings"** → **"Custom Domains"**
3. Click **"Add Custom Domain"**
4. Nhập domain: `openclawbox.vn`

### 3.2 Cấu hình DNS
Thêm records tại nhà cung cấp domain:

**Nếu dùng root domain (openclawbox.vn):**
```
Type: A
Name: @
Value: 216.24.57.1
```

**Nếu dùng subdomain (www.openclawbox.vn):**
```
Type: CNAME
Name: www
Value: openclawbox.onrender.com
```

### 3.3 Bật HTTPS
- Render tự động cấp SSL certificate
- Đợi 5-10 phút để certificate được issue

## Bước 4: Cập nhật SEO URLs

Sau khi có domain, cập nhật trong `index.html`:

```bash
# Thay https://openclawbox.vn/ bằng domain thật
sed -i '' 's|https://openclawbox.vn/|https://YOUR-DOMAIN.com/|g' index.html
```

Cũng cập nhật trong:
- `robots.txt`
- `sitemap.xml`

Sau đó commit và push:
```bash
git add .
git commit -m "Update domain URLs"
git push
```

Render sẽ tự động re-deploy.

---

## Troubleshooting

### Lỗi 404 cho assets
- Kiểm tra đường dẫn trong HTML (không có `/` ở đầu)
- Đúng: `src/css/design-system.css`
- Sai: `/src/css/design-system.css`

### Fonts không load
- Kiểm tra kết nối internet
- Google Fonts cần HTTPS

### Cache issues
- Clear cache browser: `Cmd+Shift+R` (Mac) / `Ctrl+Shift+R` (Windows)
- Hoặc đợi 5-10 phút để cache expire

---

## Auto Deploy

Mỗi lần push code lên GitHub:
1. Render tự động detect changes
2. Tự động re-deploy
3. Thường mất 30 giây - 1 phút

---

## Liên hệ hỗ trợ

- Render Docs: https://render.com/docs/static-sites
- Email: admin@techlaai.com
