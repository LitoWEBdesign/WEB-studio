import{Routes} from '@angular/router';
import {AboutCompanyComponent} from './aboutcompany/aboutcompany.component';
import{MenuAboutCompany} from './menuaboutcompany/menuaboutcompany.component';
import{MapComponent} from './map/map.component';
import{SliderComponent} from './slider/slider.component';
import{PartnerComponent} from './partner/partner.component';
import{LicenseComponent} from './license/license.component';
import {VacancyComponent} from './vacancy/vacancy.component';
import {QualityComponent} from './quality/quality.component';
import {NewsComponent}from './news/news.component';
import {AboutPnoneComponent} from './aboutphone/aboutphone.component';
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
import { RequestformforadminComponent } from './requestformforadmin/requestformforadmin.component';
import { RequestdeleteComponent } from './requestdelete/requestdelete.component';
import {LoginformComponent} from './aboutphone/loginform/loginform.component';
import { AuthguardService} from './commonfiles/auth-guard.service';
import{AboutdataComponent} from './aboutdata/aboutdata.component';
import{TechinfoComponent} from './aboutdata/techinfo/techinfo.component';
import{LeasedComponent} from './aboutdata/leased/leased.component';
import {DataComponent} from './aboutdata/data/data.component';
import{MultiserviceComponent} from './aboutdata/multiservice/multiservice.component';
import{MainpageComponent} from './datacentre/mainpage/mainpage.component';
import{InfraComponent} from './datacentre/infra/infra.component';
import {GalleryComponent} from './datacentre/gallery/gallery.component';
import {DecisionComponent} from './device/decision/decision.component';
import {PaymentComponent} from './payment/payment.component';
import {ContactyComponent} from './contacty/contacty.component';
import {SipComponent} from './sip/sip.component';
import {TariffComponent} from './sip/tariff/tariff.component';
import {DogovorComponent} from './sip/dogovor/dogovor.component';
import {InstallationComponent} from './sip/installation/installation.component';

export const routes:Routes=[
    {path:"",redirectTo:"slider",pathMatch:"full"},
    {path: "aboutcompany", component: AboutCompanyComponent },
    {path:'map',component:MapComponent},
    {path:'partner',component:PartnerComponent},
    {path:'license',component:LicenseComponent},
    {path:'vacancy',component:VacancyComponent},
    {path:'quality',component:QualityComponent},
    {path:'news',component:NewsComponent},
    {path:'aboutphone',component:AboutPnoneComponent},
    {path:'phoneprice',component:PhonePriceComponent},
    {path:'codekiev',component:CodeKievComponent},
    {path:'codesng',component:CodesngComponent},
    {path:'codeasia',component:CodeasiaComponent},
    {path:'codeeurope',component:CodeeuropeComponent},
    {path:'codesamerica',component:CodesamericaComponent},
    {path:'codeafrica',component:CodeafricaComponent},
    {path:'codeocean', component:CodeoceanComponent},
    {path:'codedop',component:CodedopComponent},
    {path:'document',component:DocumentComponent},
    {path:'agreement',component:AgreementComponent},
    {path:'requestform',component:RequestformComponent},
    {path:'app-requestformforadmin', component:RequestformforadminComponent,canActivate:[AuthguardService] },
    {path:'app-requestdelete/:id',component:RequestdeleteComponent},
    {path:'aboutdata',component:AboutdataComponent},
    {path:'techinfo',component:TechinfoComponent},
    {path:'leased',component:LeasedComponent},
    {path:'data',component:DataComponent},
    {path:'multiservice',component:MultiserviceComponent},
    {path:'mainpage',component:MainpageComponent},
    {path:'infra',component:InfraComponent},
    {path:'gallery',component:GalleryComponent},
    {path:'decision',component:DecisionComponent},
    {path:'payment',component:PaymentComponent},
    {path:'contacty',component:ContactyComponent},
    {path:'sip', component:SipComponent},
    {path:'tariff',component:TariffComponent},
    {path:'dogovor',component:DogovorComponent},
    {path:'install',component:InstallationComponent}

    

]