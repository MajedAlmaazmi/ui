import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div dir="rtl">
          <div className='date'>
            <div className=''>الثلاثاء</div>
            <div className='date-geo'>7 نوفمبر 2023م</div>
            <div className='date-hijri'>23 ربيع الآخر 1445هـ</div>
          </div>
          <div className='current-prayer'>
            <div className='current-prayer--name'>صلاة العصر</div>
            <div className='time-remaining'>
              <div className='time-remaining-title'>الوقت المتبقي</div>
                <div className='time-remaining-time'>12:04</div>
            </div>
          </div>
          <div className='prayers'>
            <div className='prayer'>
              <div className='prayer-name'>الفجر</div>
              <div className='prayer-time'>5:10</div>
            </div>

            <div className='prayer'>
              <div>الشروق</div>
              <div>6:26</div>
            </div>

            <div className='prayer'>
              <div>الظهر</div>
              <div>12:04</div>
            </div>

            <div className='prayer'>
              <div>العصر</div>
              <div>3:12</div>
            </div>

            <div className='prayer'>
              <div>المغرب</div>
              <div>5:37</div>
            </div>

            <div className='prayer'>
              <div>العشاء</div>
              <div>6:53</div>
            </div>

          </div>
        </div>
                <div className='carousel'>
          <div className='snap red'>
            التقويم الهجري
          </div>
          <div className='snap yellow'>خطباء الجمعة</div>
          <div className='snap red'>
            التقويم الهجري
          </div>
        </div>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
