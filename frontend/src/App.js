import logo from './logo.svg';
import './App.styl';

// React 相關 
import React, { 
  useCallback, 
  useEffect, 
  useState 
} from "react";

import { 
  Link, 
  NavLink, 
  Redirect, 
  Route, 
  Switch, 
  useLocation 
} from "react-router-dom";

// UI Component 相關｜https://github.com/chakra-ui/chakra-ui/
import {
  extendTheme, // https://chakra-ui.com/docs/styled-system/features/color-mode
  ChakraProvider,
  DarkMode,
  useColorMode,
  useStyleConfig,
  ComponentStyleConfig,
  Button,
  IconButton,
  Icon,
  Heading,
  Text,
  Divider,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Tag,
  Input,
  Textarea,
  Form,
  Formik,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react"

// https://react-icons.github.io/react-icons/
import { 
  MdDelete,
  MdAddCircle,
} from "react-icons/md";


// 區塊鏈的常數們（待處理）
import { 
  NETWORKS, 
  // NETWORK
  // INFURA_ID 
} from "./constants/networks"; 

// wagmi + ethers 相關 
import { providers } from "ethers";
import { 
  Provider, 
  chain, 
  defaultChains,
  // useConnect, 
  // useAccount,
} from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
// import { WalletLinkConnector } from "wagmi/connectors/walletLink"; // 這個不知為何不會有 waring，待解決

// Router 指向的頁面
import { 
  // XXXX
  // Homepage
} from "./Pages"; 

import { 
  Header, 
  Footer, 
} from "./Containers";

import { floor, bignumber, numeric, number, format } from "mathjs";
import * as dayjs from 'dayjs';

// https://chakra-ui-git-fix-typescript-autocomplete.chakra-ui.vercel.app/docs/theming/advanced

console.log('%cHomework Week1', 'background: #436822; padding: .125em .4em; color: white; font-size: 32px; font-weight: 600')

function App() {
  const targetNetwork = NETWORKS.localhost

  // Wagmi + ./constants.ks
  const connectors = ({ chainId }) => {
    const rpcUrl =
      defaultChains.find((x) => x.id === chainId)?.rpcUrls?.[0] ??
      chain.mainnet.rpcUrls[0]
    return [
      new InjectedConnector({
        defaultChains, // localhost, rinkeby
        options: { shimDisconnect: true },
      }),
    ]
  }

  const provider = ({ chainId, connector }) => {
    return targetNetwork.name == 'localhost'
    ? new providers.JsonRpcProvider(
        connector?.chains.find((x) => x.id == chainId)?.rpcUrls[0]
      )
    : providers.getDefaultProvider(
      chainId
    );
  }
  
  // 測試
  const [eventTitle, setEventTitle] = useState('')
  const [eventDescrip, setEventDescrip] = useState('')
  const handleEventTitleChange = e => setEventTitle(e.target.value)
  const handleEventDescripChange = e => setEventDescrip(e.target.value)

  const initiaTodoList = [
    {id: 1, title: 'KryptoCamp Soliday 的活動資訊', descrip: 
    `活動時間
    1330 - 1630
    
    活動地點
    犇亞會議中心  台北市松山區復興北路99號 15樓 BB 教室
    
    活動內容
    完成本週作業以及下週線上課程學習
    
    13:30 會有路易莎送咖啡跟紅茶桶裝，愛地球可以帶環保杯喔～`
    , timecode: dayjs('2022/5/14 13:00')},
    {id: 2, title: '大事情！！！！！！', descrip: 
    `卜各不而上午金節辛三娘。百辛牠抱牛澡力親河男食支次去，帶跳父竹笑喝看過就喜母，松寫原結種禾雪在玉那。草刃毛只耍工屋您你斤奶息清法戶怪！同美沒紅哭進年往男兆那服直故封，實馬打卜面和不旁呀忍食因。

    孝福欠七布旁住進花。學游巴片東怕夏斤幸每羊示服重出辛間。想色幸停得行門人苗未牛歡南且葉，到各食今隻夕雲辛乞的雨要「身斤風發」隻訴游昌成安吃種得「掃」步。

    個苦高刃紅躲英游。息光助功刀山一小燈，重耳種見旦還雨就水親草們、公背入鼻知孝示神我校房六，掃片登間，急室丁。條犬即想書經步次兩乾怪。爪亭唱蛋門采旁亮汁央邊泉西。`
    , timecode: dayjs()},
  ]

  const [todoList, setTodoList] = useState(initiaTodoList)

  const handleAddEvent = e => {
    if (eventTitle == '' || eventDescrip == '') return;
    const newEvent = {
      id: todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1, 
      title: eventTitle, 
      descrip: `${eventDescrip}`, 
      timecode: dayjs()
    }
    setTodoList(oldList => [...oldList, newEvent])
    setEventTitle('')
    setEventDescrip('')
  }

  const handleDeleteEvent = index => {
    setTodoList((oldList) => {
      const newList = JSON.parse(JSON.stringify(oldList))
      newList.splice(index, 1)
      return newList
    })
  }
  
  return pug`
    // ████████  ██     ██  ███████ 
       ██     ██ ██     ██ ██ 
       ██     ██ ██     ██ ██ 
       ████████  ██     ██ ██  ██████
       ██        ██     ██ ██     ██
       ██        ██     ██ ██     ██
       ██         ███████   ███████   - start

    //- 引入 wagmi
    Provider(
      
    )
      //- 引入 Chakra UI
      .App.d-flex.flex-column
        Header
        main.flex-fill

          //- Chakra UI Heading
          //  ███████  ██████  ███████  ██      ██
              ██      ██    ██ ██    ██ ████  ████
              ███████ ██    ██ ███████  ██ ████ ██
              ██      ██    ██ ██   ██  ██  ██  ██
              ██       ██████  ██    ██ ██      ██
              之後來試試：使用第三方函式庫 Formik 進行表單的驗證 
              https://ithelp.ithome.com.tw/articles/10273080
          .container-lg.px-4.py-5
            Heading.mb-5(as="h1" size="2xl" fontWeight="100") Homework Week 1
            .content
              Heading.mb-4(as="h3" size="lg" color="" fontWeight="300") 增加事件
              FormControl.mb-2(isInvalid=eventTitle === '')
                FormLabel.text-nowrap.mb-2 事件標題
                Input(
                  id="title"
                  value=eventTitle
                  onChange=handleEventTitleChange
                  placeholder="請盡情輸入！"
                )
                if eventTitle === ''
                  FormErrorMessage.text-start 請輸入事件標題
                else
                  FormHelperText.text-start ：）
              FormControl.mb-2(isInvalid=eventDescrip === '')
                FormLabel.text-nowrap.mb-2 事件敘述（可輸入無限多字）
                Textarea(
                  id="descrip"
                  value=eventDescrip
                  onChange=handleEventDescripChange
                  placeholder="請盡情輸入！"
                )
                if eventDescrip === ''
                  FormErrorMessage.text-start 請輸入事件敘述
                else
                  FormHelperText.text-start ：）
              .d-flex.flex-column.align-items-center
                Button(
                  colorScheme="teal"
                  onClick=handleAddEvent
                ) 新增事件
                  Icon.ms-2(as=MdAddCircle w=6 h=6)
                      
          //  ██      ██  █████ ████████
              ██      ██ ██        ██
              ██      ██ ███████   ██
              ██      ██      ██   ██
              ███████ ██ ██████    ██    
          .container-lg.px-4.py-5
            .content
              Heading.mb-4(as="h3" size="lg" color="" fontWeight="300") 事件清單
              List.d-flex.flex-column-reverse
                each item, index in todoList
                  ListItem.my-5(key=index)
                    .d-flex.justify-content-between.align-items-center
                      .d-flex.flex-column.align-items-start.flex-fill.pr-3
                        Tag.mb-3
                          |#{dayjs(item.timecode).format('YYYY MM/DD')}
                          |#{dayjs(item.timecode).format('HH:mm:ss')}
                        .d-flex.justify-content-between.align-self-stretch
                          Heading.text-start.pr-3(as="h4" size="xl" color="teal" fontWeight="300")
                            |#{item.id} - 
                            |#{item.title}
                          //- IconButton 無法使用。透過 source code 發現是 Button Based。
                          Button(
                            adding="0"
                            borderRadius="full"
                            variant="outline" 
                            colorScheme="teal"
                            size="md" 
                            onClick=() => {
                              handleDeleteEvent(index)
                            }
                          ) 
                            Icon(as=MdDelete w=6 h=6)
                    Text.mt-3.text-start(
                      size="xl" fontWeight="400"
                      sx={
                        whiteSpace: 'pre-line'
                      }
                    ) 
                      |#{item.descrip}
                  if (index !== todoList.length - 1)
                    Divider
        // Footer
          
    // █████████ ██     ██ ███████
       ██        ███    ██ ██     ██
       ██        ████   ██ ██     ██
       █████████ ██ ███ ██ ██     ██
       ██        ██   ████ ██     ██
       ██        ██    ███ ██     ██
       █████████ ██     ██ ███████
  `;
}

export default App;
