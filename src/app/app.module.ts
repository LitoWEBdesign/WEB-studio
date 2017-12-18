import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {FormsModule,FormControl} from '@angular/forms';
import {SearchComponent} from './search/search.component';
import {AboutCompanyComponent} from './aboutcompany/aboutcompany.component'
import {MenuAboutCompany} from './menuaboutcompany/menuaboutcompany.component';
import {MapComponent} from './map/map.component';
import {routes} from './app.routes';
import { CarouselModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';
import {SliderComponent} from './slider/slider.component';
import {PartnerComponent} from './partner/partner.component';
import {LicenseComponent} from './license/license.component';
import {VacancyComponent} from './vacancy/vacancy.component';
import {QualityComponent} from './quality/quality.component';
import {QualityModule} from './quality/quality.module';
import {NewsComponent} from './news/news.component';
import {NewsModule} from './news/news.module';
import {AboutPnoneComponent} from './aboutphone/aboutphone.component';
import {MenuPhoneComponent} from './menuphone/menuphone.component';
import {PhonePriceComponent} from './aboutphone/phoneprice/phoneprice.component';
import {CodeKievComponent} from './aboutphone/codekiev/codekiev.component';
import {CodesngComponent} from './aboutphone/codesng/codesng.component';
import {CodeasiaComponent} from './aboutphone/codeasia/codeasia.component';
import {CodeeuropeComponent} from './aboutphone/codeeurope/codeeurope.component';
import {CodesamericaComponent} from './aboutphone/codesamerica/codesamerica.component';
import {CodeafricaComponent} from './aboutphone/codeafrica/codeafrica.component';
import {CodeoceanComponent} from './aboutphone/codeocean/codeocean.component';
import {CodedopComponent} from './aboutphone/codedop/codedop.component';
import {DocumentComponent} from './aboutphone/document/document.component';
import {AgreementComponent} from './aboutphone/agreement/agreement.component';
import {RequestformComponent} from './requestform/requestform.component'
import { ReactiveFormsModule } from "@angular/forms";
import {Http} from '@angular/http';
import {HttpModule} from '@angular/http';
import {RequestformongoService} from './commonfiles/requestformongodb/requestformongo.service';
import { RequestformforadminComponent } from './requestformforadmin/requestformforadmin.component';
import { RequestdeleteComponent } from './requestdelete/requestdelete.component';
import {LoginformComponent} from './aboutphone/loginform/loginform.component';
import {LoginRoutingModule} from './login-routing.module';
import {MenuData} from './menudata/menudata.component';
import{AboutdataComponent} from './aboutdata/aboutdata.component';
import{TechinfoComponent} from './aboutdata/techinfo/techinfo.component';
import{LeasedComponent} from './aboutdata/leased/leased.component';
import {DataComponent} from './aboutdata/data/data.component';
import{MultiserviceComponent} from './aboutdata/multiservice/multiservice.component';
import{MainpageComponent} from './datacentre/mainpage/mainpage.component';
import{MenudatacentreComponent} from './menudatacentre/menudatacentre.component';
import{InfraComponent} from './datacentre/infra/infra.component';
import {GalleryComponent} from './datacentre/gallery/gallery.component';
import {CSSCarouselComponent } from './datacentre/gallery/carousel.component';
import {MenuDevice} from './menudevice/menudevice.component';
import {PaymentComponent} from './payment/payment.component';
import {DeviceModule} from './device/device.module';
import {ContactyComponent} from './contacty/contacty.component';
import {MenuSip} from './menusip/menusip.component';
import {SipComponent} from './sip/sip.component';
import {TariffComponent} from './sip/tariff/tariff.component'
import {DogovorComponent} from './sip/dogovor/dogovor.component';
import {InstallationComponent} from './sip/installation/installation.component';

@NgModule({
  declarations: [
    AppComponent,SearchComponent,AboutCompanyComponent,MenuAboutCompany,
    MapComponent,SliderComponent,PartnerComponent,LicenseComponent,VacancyComponent,
    QualityComponent,NewsComponent,AboutPnoneComponent,MenuPhoneComponent,PhonePriceComponent,
    CodeKievComponent,CodesngComponent,CodeasiaComponent,CodeeuropeComponent,CodesamericaComponent,
    CodeafricaComponent,CodeoceanComponent,CodedopComponent,DocumentComponent,AgreementComponent,
    RequestformComponent,RequestformforadminComponent, RequestdeleteComponent,LoginformComponent,
    MenuData,AboutdataComponent,TechinfoComponent,LeasedComponent,DataComponent,MultiserviceComponent,
    MainpageComponent,MenudatacentreComponent,InfraComponent,GalleryComponent,CSSCarouselComponent,
    MenuDevice,PaymentComponent,ContactyComponent,MenuSip,SipComponent,TariffComponent,DogovorComponent,
    InstallationComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),CarouselModule.forRoot(),QualityModule,NewsModule,
    ReactiveFormsModule,FormsModule,HttpModule,LoginRoutingModule,DeviceModule
  ],
  providers: [RequestformongoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
