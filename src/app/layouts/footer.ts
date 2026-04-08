import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="govsa-footer" dir="rtl">
      <div class="feedback-container">
        <div class="container">
          <div class="d-md-flex justify-content-center align-items-center p-md-4 p-3 feedback-container-div">
            <div class="mx-3">
              <span>
                هل استفدت مما هو مقدم في هذه الصفحة؟
                <a href="" class="govsa-footer-link">نعم</a> |
                <a href="" class="govsa-footer-link">لا</a>
              </span>
            </div>
            <div class="mx-4 pt-2 pt-md-0">
              <span>تمت الإجابة بنعم من قبل 173 والر من 199 إجابة</span>
            </div>
          </div>
        </div>
      </div>

      <div class="d-md-flex justify-content-around pt-5 px-2">
        <!-- نظرة عامة -->
        <div>
          <ul class="quick-links">
            <li>نظرة عامة</li>
            <li><a href="" class="footer-link">عن الوزارة</a></li>
            <li><a href="" class="footer-link">استراتيجية وزارة المالية</a></li>
            <li><a href="" class="footer-link">سياسة الاستخدام والخصوصية</a></li>
            <li><a href="" class="footer-link">الأخبار والفعاليات</a></li>
            <li><a href="" class="footer-link">التقارير السنوية</a></li>
            <li><a href="" class="footer-link">اتفاقيات مستوى الخدمة</a></li>
            <li><a href="" class="footer-link">سهولة الوصول</a></li>
          </ul>
        </div>

        <!-- الدعم والمساعدة -->
        <div>
          <ul class="quick-links">
            <li>الدعم والمساعدة</li>
            <li><a href="" class="footer-link">تواصل معنا</a></li>
            <li><a href="" class="footer-link">المشاركة المجتمعية الإلكترونية</a></li>
            <li><a href="" class="footer-link">الإبلاغ عن حالة فساد</a></li>
            <li><a href="" class="footer-link">الأسئلة الشائعة</a></li>
            <li><a href="" class="footer-link">حرية المعلومات</a></li>
          </ul>
        </div>

        <!-- روابط مهمة -->
        <div>
          <ul class="quick-links">
            <li>روابط مهمة</li>
            <li><a href="" class="footer-link">المنصة الوطنية</a></li>
            <li><a href="" class="footer-link">منصة البيانات المفتوحة</a></li>
            <li><a href="" class="footer-link">الإستراتيجية الوطنية للبيانات والذكاء الاصطناعي</a></li>
            <li><a href="" class="footer-link">منصة المشاركة الإلكترونية</a></li>
            <li><a href="" class="footer-link">منصة اعتماد</a></li>
            <li><a href="" class="footer-link">ميزانية الدولة</a></li>
          </ul>
        </div>

        <!-- تابعنا على + أدوات -->
        <div>
          <div class="contact-us-div d-md-flex justify-content-between p-md-0">
            <div class="p-2">
              <p>تابعنا على</p>
            </div>
          </div>
          <div class="d-flex social-icons-container mb-3">
            <div class="p-2">
              <img src="govsa-ds/images/facebook.svg" alt="فيسبوك" width="36">
            </div>
            <div class="p-2">
              <img src="govsa-ds/images/linkedin.svg" alt="لينكد إن" width="36">
            </div>
            <div class="p-2">
              <img src="govsa-ds/images/twitter.svg" alt="إكس" width="36">
            </div>
          </div>

          <div class="contact-us-div d-md-flex justify-content-between p-md-0">
            <div class="p-2">
              <p>أدوات سهولة الوصول</p>
            </div>
          </div>
          <div class="footer-bordered-div align-items-center mb-3">
            <div class="d-md-flex justify-content-around align-items-center footer-div-border">
              <div class="p-2">
                <img alt="إعداد التباين" src="govsa-ds/images/contrast.svg">
              </div>
              <div class="p-2">
                <div class="custom-control custom-switch govsa-switch">
                  <input type="checkbox" class="custom-control-input" id="customSwitches-rtl-footer">
                  <label class="custom-control-label" for="customSwitches-rtl-footer"></label>
                </div>
              </div>
            </div>
            <div class="d-md-flex justify-content-around align-items-center footer-div-border">
              <div class="p-2">
                <img alt="قارئ الشاشة" src="govsa-ds/images/volume.svg">
              </div>
              <div class="p-2">
                <ins><a href="#" class="footer-link">عرض المزيد</a></ins>
              </div>
            </div>
          </div>

          <div class="contact-us-div p-2 mb-3">
            <p>دعم لغة الإشارة الحية</p>
          </div>

          <div class="contact-us-div p-2">
            <p>حمل التطبيق</p>
          </div>
          <div class="d-flex p-2">
            <a href="#" class="mr-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" height="36">
            </a>
            <a href="#">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" height="36">
            </a>
          </div>
        </div>
      </div>

      <div class="d-md-flex flex-column social-container justify-content-center align-items-center">
        <img src="govsa-ds/images/vision-2030-white.svg" alt="رؤية 2030" width="89.99">
      </div>

      <hr class="footer-divider">

      <div class="d-md-flex justify-content-between p-3 footer--terms-div">
        <div class="text-center">
          <a href="#" class="footer-link px-1">سياسة الخصوصية</a>
          <a href="#" class="footer-link px-1">سياسة الاستخدام</a>
          <a href="#" class="footer-link px-1">خريطة الموقع</a>
          <a href="#" class="footer-link px-1">RSS</a>
        </div>
        <div class="text-center">
          <span>تم التطوير بواسطة فريق عمل التأمين بوزارة المالية</span>
        </div>
        <div class="text-center">
          <span>حقوق الملكية محفوظة لوزارة المالية &copy; 2026</span>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {}
