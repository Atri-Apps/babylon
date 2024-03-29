import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Upload } from "@atrilabs/react-component-manifests/src/manifests/Upload/Upload.tsx";
import { Slider } from "@atrilabs/react-component-manifests/src/manifests/Slider/Slider.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useBodyCb, useFooterCb, useFlex39Cb, useModel_InfoCb, useModel_HeaderCb, useStepsCb, useStep_1Cb, useFlex43Cb, useFlex49Cb, useDiv26Cb, useFlex55Cb, useFlex57Cb, useDiv43Cb, useStep_2Cb, useFlex61Cb, useFlex60Cb, useFlex59Cb, useDiv34Cb, useFlex64Cb, useFlex66Cb, useFlex62Cb, useStep_3Cb, useFlex71Cb, useFlex72Cb, useFlex70Cb, useFlex68Cb, userun_btnCb, useLogsCb, useFlex76Cb, useFlex77Cb, useFlex78Cb, useDiv42Cb, useFlex85Cb, useFlex84Cb, useTextBox43Cb, useTextBox44Cb, useImage26Cb, useTextBox6Cb, useModel_NameCb, useTextBox45Cb, useImage10Cb, useImage6Cb, useDiv29Cb, useTextBox54Cb, useVideo_UploadCb, useFile_UploadCb, useImage22Cb, useDiv30Cb, useTextBox56Cb, useinterval_sliderCb, useTextBox58Cb, useTextBox59Cb, useinterval_inputCb, useImage18Cb, useTextBox57Cb, useTextBox63Cb, useImage19Cb, useDiv38Cb, useTextBox62Cb, useTextBox64Cb, useImage27Cb, useTextBox65Cb, useTextBox66Cb, useImage20Cb, useTextBox67Cb, useImage21Cb, useTextBox104Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const BodyProps = useStore((state)=>state["Home"]["Body"]);
const BodyIoProps = useIoStore((state)=>state["Home"]["Body"]);
const BodyCb = useBodyCb()
const FooterProps = useStore((state)=>state["Home"]["Footer"]);
const FooterIoProps = useIoStore((state)=>state["Home"]["Footer"]);
const FooterCb = useFooterCb()
const Flex39Props = useStore((state)=>state["Home"]["Flex39"]);
const Flex39IoProps = useIoStore((state)=>state["Home"]["Flex39"]);
const Flex39Cb = useFlex39Cb()
const Model_InfoProps = useStore((state)=>state["Home"]["Model_Info"]);
const Model_InfoIoProps = useIoStore((state)=>state["Home"]["Model_Info"]);
const Model_InfoCb = useModel_InfoCb()
const Model_HeaderProps = useStore((state)=>state["Home"]["Model_Header"]);
const Model_HeaderIoProps = useIoStore((state)=>state["Home"]["Model_Header"]);
const Model_HeaderCb = useModel_HeaderCb()
const StepsProps = useStore((state)=>state["Home"]["Steps"]);
const StepsIoProps = useIoStore((state)=>state["Home"]["Steps"]);
const StepsCb = useStepsCb()
const Step_1Props = useStore((state)=>state["Home"]["Step_1"]);
const Step_1IoProps = useIoStore((state)=>state["Home"]["Step_1"]);
const Step_1Cb = useStep_1Cb()
const Flex43Props = useStore((state)=>state["Home"]["Flex43"]);
const Flex43IoProps = useIoStore((state)=>state["Home"]["Flex43"]);
const Flex43Cb = useFlex43Cb()
const Flex49Props = useStore((state)=>state["Home"]["Flex49"]);
const Flex49IoProps = useIoStore((state)=>state["Home"]["Flex49"]);
const Flex49Cb = useFlex49Cb()
const Div26Props = useStore((state)=>state["Home"]["Div26"]);
const Div26IoProps = useIoStore((state)=>state["Home"]["Div26"]);
const Div26Cb = useDiv26Cb()
const Flex55Props = useStore((state)=>state["Home"]["Flex55"]);
const Flex55IoProps = useIoStore((state)=>state["Home"]["Flex55"]);
const Flex55Cb = useFlex55Cb()
const Flex57Props = useStore((state)=>state["Home"]["Flex57"]);
const Flex57IoProps = useIoStore((state)=>state["Home"]["Flex57"]);
const Flex57Cb = useFlex57Cb()
const Div43Props = useStore((state)=>state["Home"]["Div43"]);
const Div43IoProps = useIoStore((state)=>state["Home"]["Div43"]);
const Div43Cb = useDiv43Cb()
const Step_2Props = useStore((state)=>state["Home"]["Step_2"]);
const Step_2IoProps = useIoStore((state)=>state["Home"]["Step_2"]);
const Step_2Cb = useStep_2Cb()
const Flex61Props = useStore((state)=>state["Home"]["Flex61"]);
const Flex61IoProps = useIoStore((state)=>state["Home"]["Flex61"]);
const Flex61Cb = useFlex61Cb()
const Flex60Props = useStore((state)=>state["Home"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["Home"]["Flex60"]);
const Flex60Cb = useFlex60Cb()
const Flex59Props = useStore((state)=>state["Home"]["Flex59"]);
const Flex59IoProps = useIoStore((state)=>state["Home"]["Flex59"]);
const Flex59Cb = useFlex59Cb()
const Div34Props = useStore((state)=>state["Home"]["Div34"]);
const Div34IoProps = useIoStore((state)=>state["Home"]["Div34"]);
const Div34Cb = useDiv34Cb()
const Flex64Props = useStore((state)=>state["Home"]["Flex64"]);
const Flex64IoProps = useIoStore((state)=>state["Home"]["Flex64"]);
const Flex64Cb = useFlex64Cb()
const Flex66Props = useStore((state)=>state["Home"]["Flex66"]);
const Flex66IoProps = useIoStore((state)=>state["Home"]["Flex66"]);
const Flex66Cb = useFlex66Cb()
const Flex62Props = useStore((state)=>state["Home"]["Flex62"]);
const Flex62IoProps = useIoStore((state)=>state["Home"]["Flex62"]);
const Flex62Cb = useFlex62Cb()
const Step_3Props = useStore((state)=>state["Home"]["Step_3"]);
const Step_3IoProps = useIoStore((state)=>state["Home"]["Step_3"]);
const Step_3Cb = useStep_3Cb()
const Flex71Props = useStore((state)=>state["Home"]["Flex71"]);
const Flex71IoProps = useIoStore((state)=>state["Home"]["Flex71"]);
const Flex71Cb = useFlex71Cb()
const Flex72Props = useStore((state)=>state["Home"]["Flex72"]);
const Flex72IoProps = useIoStore((state)=>state["Home"]["Flex72"]);
const Flex72Cb = useFlex72Cb()
const Flex70Props = useStore((state)=>state["Home"]["Flex70"]);
const Flex70IoProps = useIoStore((state)=>state["Home"]["Flex70"]);
const Flex70Cb = useFlex70Cb()
const Flex68Props = useStore((state)=>state["Home"]["Flex68"]);
const Flex68IoProps = useIoStore((state)=>state["Home"]["Flex68"]);
const Flex68Cb = useFlex68Cb()
const run_btnProps = useStore((state)=>state["Home"]["run_btn"]);
const run_btnIoProps = useIoStore((state)=>state["Home"]["run_btn"]);
const run_btnCb = userun_btnCb()
const LogsProps = useStore((state)=>state["Home"]["Logs"]);
const LogsIoProps = useIoStore((state)=>state["Home"]["Logs"]);
const LogsCb = useLogsCb()
const Flex76Props = useStore((state)=>state["Home"]["Flex76"]);
const Flex76IoProps = useIoStore((state)=>state["Home"]["Flex76"]);
const Flex76Cb = useFlex76Cb()
const Flex77Props = useStore((state)=>state["Home"]["Flex77"]);
const Flex77IoProps = useIoStore((state)=>state["Home"]["Flex77"]);
const Flex77Cb = useFlex77Cb()
const Flex78Props = useStore((state)=>state["Home"]["Flex78"]);
const Flex78IoProps = useIoStore((state)=>state["Home"]["Flex78"]);
const Flex78Cb = useFlex78Cb()
const Div42Props = useStore((state)=>state["Home"]["Div42"]);
const Div42IoProps = useIoStore((state)=>state["Home"]["Div42"]);
const Div42Cb = useDiv42Cb()
const Flex85Props = useStore((state)=>state["Home"]["Flex85"]);
const Flex85IoProps = useIoStore((state)=>state["Home"]["Flex85"]);
const Flex85Cb = useFlex85Cb()
const Flex84Props = useStore((state)=>state["Home"]["Flex84"]);
const Flex84IoProps = useIoStore((state)=>state["Home"]["Flex84"]);
const Flex84Cb = useFlex84Cb()
const TextBox43Props = useStore((state)=>state["Home"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["Home"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const TextBox44Props = useStore((state)=>state["Home"]["TextBox44"]);
const TextBox44IoProps = useIoStore((state)=>state["Home"]["TextBox44"]);
const TextBox44Cb = useTextBox44Cb()
const Image26Props = useStore((state)=>state["Home"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["Home"]["Image26"]);
const Image26Cb = useImage26Cb()
const TextBox6Props = useStore((state)=>state["Home"]["TextBox6"]);
const TextBox6IoProps = useIoStore((state)=>state["Home"]["TextBox6"]);
const TextBox6Cb = useTextBox6Cb()
const Model_NameProps = useStore((state)=>state["Home"]["Model_Name"]);
const Model_NameIoProps = useIoStore((state)=>state["Home"]["Model_Name"]);
const Model_NameCb = useModel_NameCb()
const TextBox45Props = useStore((state)=>state["Home"]["TextBox45"]);
const TextBox45IoProps = useIoStore((state)=>state["Home"]["TextBox45"]);
const TextBox45Cb = useTextBox45Cb()
const Image10Props = useStore((state)=>state["Home"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["Home"]["Image10"]);
const Image10Cb = useImage10Cb()
const Image6Props = useStore((state)=>state["Home"]["Image6"]);
const Image6IoProps = useIoStore((state)=>state["Home"]["Image6"]);
const Image6Cb = useImage6Cb()
const Div29Props = useStore((state)=>state["Home"]["Div29"]);
const Div29IoProps = useIoStore((state)=>state["Home"]["Div29"]);
const Div29Cb = useDiv29Cb()
const TextBox54Props = useStore((state)=>state["Home"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["Home"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const Video_UploadProps = useStore((state)=>state["Home"]["Video_Upload"]);
const Video_UploadIoProps = useIoStore((state)=>state["Home"]["Video_Upload"]);
const Video_UploadCb = useVideo_UploadCb()
const File_UploadProps = useStore((state)=>state["Home"]["File_Upload"]);
const File_UploadIoProps = useIoStore((state)=>state["Home"]["File_Upload"]);
const File_UploadCb = useFile_UploadCb()
const Image22Props = useStore((state)=>state["Home"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["Home"]["Image22"]);
const Image22Cb = useImage22Cb()
const Div30Props = useStore((state)=>state["Home"]["Div30"]);
const Div30IoProps = useIoStore((state)=>state["Home"]["Div30"]);
const Div30Cb = useDiv30Cb()
const TextBox56Props = useStore((state)=>state["Home"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Home"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const interval_sliderProps = useStore((state)=>state["Home"]["interval_slider"]);
const interval_sliderIoProps = useIoStore((state)=>state["Home"]["interval_slider"]);
const interval_sliderCb = useinterval_sliderCb()
const TextBox58Props = useStore((state)=>state["Home"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["Home"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const TextBox59Props = useStore((state)=>state["Home"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["Home"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const interval_inputProps = useStore((state)=>state["Home"]["interval_input"]);
const interval_inputIoProps = useIoStore((state)=>state["Home"]["interval_input"]);
const interval_inputCb = useinterval_inputCb()
const Image18Props = useStore((state)=>state["Home"]["Image18"]);
const Image18IoProps = useIoStore((state)=>state["Home"]["Image18"]);
const Image18Cb = useImage18Cb()
const TextBox57Props = useStore((state)=>state["Home"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["Home"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const TextBox63Props = useStore((state)=>state["Home"]["TextBox63"]);
const TextBox63IoProps = useIoStore((state)=>state["Home"]["TextBox63"]);
const TextBox63Cb = useTextBox63Cb()
const Image19Props = useStore((state)=>state["Home"]["Image19"]);
const Image19IoProps = useIoStore((state)=>state["Home"]["Image19"]);
const Image19Cb = useImage19Cb()
const Div38Props = useStore((state)=>state["Home"]["Div38"]);
const Div38IoProps = useIoStore((state)=>state["Home"]["Div38"]);
const Div38Cb = useDiv38Cb()
const TextBox62Props = useStore((state)=>state["Home"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["Home"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const TextBox64Props = useStore((state)=>state["Home"]["TextBox64"]);
const TextBox64IoProps = useIoStore((state)=>state["Home"]["TextBox64"]);
const TextBox64Cb = useTextBox64Cb()
const Image27Props = useStore((state)=>state["Home"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["Home"]["Image27"]);
const Image27Cb = useImage27Cb()
const TextBox65Props = useStore((state)=>state["Home"]["TextBox65"]);
const TextBox65IoProps = useIoStore((state)=>state["Home"]["TextBox65"]);
const TextBox65Cb = useTextBox65Cb()
const TextBox66Props = useStore((state)=>state["Home"]["TextBox66"]);
const TextBox66IoProps = useIoStore((state)=>state["Home"]["TextBox66"]);
const TextBox66Cb = useTextBox66Cb()
const Image20Props = useStore((state)=>state["Home"]["Image20"]);
const Image20IoProps = useIoStore((state)=>state["Home"]["Image20"]);
const Image20Cb = useImage20Cb()
const TextBox67Props = useStore((state)=>state["Home"]["TextBox67"]);
const TextBox67IoProps = useIoStore((state)=>state["Home"]["TextBox67"]);
const TextBox67Cb = useTextBox67Cb()
const Image21Props = useStore((state)=>state["Home"]["Image21"]);
const Image21IoProps = useIoStore((state)=>state["Home"]["Image21"]);
const Image21Cb = useImage21Cb()
const TextBox104Props = useStore((state)=>state["Home"]["TextBox104"]);
const TextBox104IoProps = useIoStore((state)=>state["Home"]["TextBox104"]);
const TextBox104Cb = useTextBox104Cb()

  return (<>
  <Flex className="p-Home Body bpt" {...BodyProps} {...BodyCb} {...BodyIoProps}>
<Flex className="p-Home Model_Info bpt" {...Model_InfoProps} {...Model_InfoCb} {...Model_InfoIoProps}>
<Flex className="p-Home Model_Header bpt" {...Model_HeaderProps} {...Model_HeaderCb} {...Model_HeaderIoProps}>
<TextBox className="p-Home Model_Name bpt" {...Model_NameProps} {...Model_NameCb} {...Model_NameIoProps}/>
</Flex>
<TextBox className="p-Home TextBox6 bpt" {...TextBox6Props} {...TextBox6Cb} {...TextBox6IoProps}/>
</Flex>
<Flex className="p-Home Steps bpt" {...StepsProps} {...StepsCb} {...StepsIoProps}>
<Flex className="p-Home Step_1 bpt" {...Step_1Props} {...Step_1Cb} {...Step_1IoProps}>
<Flex className="p-Home Flex43 bpt" {...Flex43Props} {...Flex43Cb} {...Flex43IoProps}>
<Image className="p-Home Image10 bpt" {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
<TextBox className="p-Home TextBox45 bpt" {...TextBox45Props} {...TextBox45Cb} {...TextBox45IoProps}/>
</Flex>
<Flex className="p-Home Flex49 bpt" {...Flex49Props} {...Flex49Cb} {...Flex49IoProps}>
<Flex className="p-Home Flex55 bpt" {...Flex55Props} {...Flex55Cb} {...Flex55IoProps}>
<Div className="p-Home Div29 bpt" {...Div29Props} {...Div29Cb} {...Div29IoProps}/>
<Flex className="p-Home Flex57 bpt" {...Flex57Props} {...Flex57Cb} {...Flex57IoProps}>
<TextBox className="p-Home TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
<Upload className="p-Home Video_Upload bpt" {...Video_UploadProps} {...Video_UploadCb} {...Video_UploadIoProps}/>
<Div className="p-Home Div43 bpt" {...Div43Props} {...Div43Cb} {...Div43IoProps}>
<Image className="p-Home Image22 bpt" {...Image22Props} {...Image22Cb} {...Image22IoProps}/>
<Upload className="p-Home File_Upload bpt" {...File_UploadProps} {...File_UploadCb} {...File_UploadIoProps}/>
</Div>
</Flex>
</Flex>
<Div className="p-Home Div26 bpt" {...Div26Props} {...Div26Cb} {...Div26IoProps}>
<Image className="p-Home Image6 bpt" {...Image6Props} {...Image6Cb} {...Image6IoProps}/>
</Div>
</Flex>
</Flex>
<Flex className="p-Home Step_2 bpt" {...Step_2Props} {...Step_2Cb} {...Step_2IoProps}>
<Flex className="p-Home Flex62 bpt" {...Flex62Props} {...Flex62Cb} {...Flex62IoProps}>
<Image className="p-Home Image18 bpt" {...Image18Props} {...Image18Cb} {...Image18IoProps}/>
<TextBox className="p-Home TextBox57 bpt" {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
</Flex>
<Flex className="p-Home Flex61 bpt" {...Flex61Props} {...Flex61Cb} {...Flex61IoProps}>
<Flex className="p-Home Flex60 bpt" {...Flex60Props} {...Flex60Cb} {...Flex60IoProps}>
<Div className="p-Home Div30 bpt" {...Div30Props} {...Div30Cb} {...Div30IoProps}/>
<Flex className="p-Home Flex59 bpt" {...Flex59Props} {...Flex59Cb} {...Flex59IoProps}>
<TextBox className="p-Home TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
<Div className="p-Home Div34 bpt" {...Div34Props} {...Div34Cb} {...Div34IoProps}>
<Slider className="p-Home interval_slider bpt" {...interval_sliderProps} {...interval_sliderCb} {...interval_sliderIoProps}/>
<Flex className="p-Home Flex64 bpt" {...Flex64Props} {...Flex64Cb} {...Flex64IoProps}>
<TextBox className="p-Home TextBox59 bpt" {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
<TextBox className="p-Home TextBox58 bpt" {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
</Flex>
</Div>
</Flex>
</Flex>
<Flex className="p-Home Flex66 bpt" {...Flex66Props} {...Flex66Cb} {...Flex66IoProps}>
<Input className="p-Home interval_input bpt" {...interval_inputProps} {...interval_inputCb} {...interval_inputIoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Step_3 bpt" {...Step_3Props} {...Step_3Cb} {...Step_3IoProps}>
<Flex className="p-Home Flex71 bpt" {...Flex71Props} {...Flex71Cb} {...Flex71IoProps}>
<Image className="p-Home Image19 bpt" {...Image19Props} {...Image19Cb} {...Image19IoProps}/>
<TextBox className="p-Home TextBox63 bpt" {...TextBox63Props} {...TextBox63Cb} {...TextBox63IoProps}/>
</Flex>
<Flex className="p-Home Flex72 bpt" {...Flex72Props} {...Flex72Cb} {...Flex72IoProps}>
<Flex className="p-Home Flex70 bpt" {...Flex70Props} {...Flex70Cb} {...Flex70IoProps}>
<Div className="p-Home Div38 bpt" {...Div38Props} {...Div38Cb} {...Div38IoProps}/>
<Flex className="p-Home Flex68 bpt" {...Flex68Props} {...Flex68Cb} {...Flex68IoProps}>
<TextBox className="p-Home TextBox62 bpt" {...TextBox62Props} {...TextBox62Cb} {...TextBox62IoProps}/>
<Flex className="p-Home run_btn bpt" {...run_btnProps} {...run_btnCb} {...run_btnIoProps}>
<Image className="p-Home Image27 bpt" {...Image27Props} {...Image27Cb} {...Image27IoProps}/>
<TextBox className="p-Home TextBox64 bpt" {...TextBox64Props} {...TextBox64Cb} {...TextBox64IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Logs bpt" {...LogsProps} {...LogsCb} {...LogsIoProps}>
<TextBox className="p-Home TextBox65 bpt" {...TextBox65Props} {...TextBox65Cb} {...TextBox65IoProps}/>
<Flex className="p-Home Flex76 bpt" {...Flex76Props} {...Flex76Cb} {...Flex76IoProps}>
<Flex className="p-Home Flex77 bpt" {...Flex77Props} {...Flex77Cb} {...Flex77IoProps}>
<Image className="p-Home Image20 bpt" {...Image20Props} {...Image20Cb} {...Image20IoProps}/>
<TextBox className="p-Home TextBox66 bpt" {...TextBox66Props} {...TextBox66Cb} {...TextBox66IoProps}/>
</Flex>
<Flex className="p-Home Flex78 bpt" {...Flex78Props} {...Flex78Cb} {...Flex78IoProps}>
<Image className="p-Home Image21 bpt" {...Image21Props} {...Image21Cb} {...Image21IoProps}/>
<TextBox className="p-Home TextBox67 bpt" {...TextBox67Props} {...TextBox67Cb} {...TextBox67IoProps}/>
</Flex>
</Flex>
<Div className="p-Home Div42 bpt" {...Div42Props} {...Div42Cb} {...Div42IoProps}>
<Flex className="p-Home Flex85 bpt" {...Flex85Props} {...Flex85Cb} {...Flex85IoProps}>
<Flex className="p-Home Flex84 bpt" {...Flex84Props} {...Flex84Cb} {...Flex84IoProps}>
<TextBox className="p-Home TextBox104 bpt" {...TextBox104Props} {...TextBox104Cb} {...TextBox104IoProps}/>
</Flex>
</Flex>
</Div>
</Flex>
<Flex className="p-Home Footer bpt" {...FooterProps} {...FooterCb} {...FooterIoProps}>
<Flex className="p-Home Flex39 bpt" {...Flex39Props} {...Flex39Cb} {...Flex39IoProps}>
<TextBox className="p-Home TextBox43 bpt" {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
<Image className="p-Home Image26 bpt" {...Image26Props} {...Image26Cb} {...Image26IoProps}/>
<TextBox className="p-Home TextBox44 bpt" {...TextBox44Props} {...TextBox44Cb} {...TextBox44IoProps}/>
</Flex>
</Flex>
</Flex>
  </>);
}
