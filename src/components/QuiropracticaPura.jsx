/** @jsxImportSource theme-ui */
import background from "../../assets/img/quiropractica_back.png";
import bjPalmerSide from "../../assets/img/INNATE-bj_palmer.png";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";

const QuiropracticaPura = () => {
  gsap.registerPlugin(ScrollTrigger);

  const mySection = useRef(null);
  const refTitle = useRef(null);
  const refSideImg = useRef(null);
  const refBackground = useRef(null);
  const refSvgButton = useRef(null);

  useEffect(() => {
    fadeIn();
    parallelAnimation();
  }, []);

  const parallelAnimation = () => {
    gsap.fromTo(
      refSideImg.current,
      {
        translateY: 0,
      },
      {
        translateY: 100,
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: mySection.current,
          start: "top center",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      refBackground.current,
      {
        translateY: 0,
      },
      {
        translateY: -50,
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: mySection.current,
          start: "top center",
          scrub: true,
        },
      }
    );
  };

  const fadeIn = () => {
    gsap.fromTo(
      refTitle.current,
      {
        translateX: -100,
        opacity: 0,
      },
      {
        opacity: 1,
        translateX: 0,
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: mySection.current,
          start: "top center",
        },
      }
    );
    gsap.fromTo(
      refSideImg.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        delay: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: mySection.current,
          start: "top center",
        },
      }
    );
    gsap.fromTo(
      refSvgButton.current,
      {
        translateX: 700,
      },
      {
        translateX: 0,
        duration: 0.5,
        delay: 1.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: mySection.current,
          start: "top center",
        },
      }
    );
  };

  return (
    <section
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mb: "100px",
        position: "relative",
      }}
      ref={mySection}
    >
      <div
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "90%",
          textAlign: "center",
          gap: "30px",
        }}
      >
        <div ref={refTitle}>
          <h1
            sx={{
              color: "primary",
              fontFamily: "heading",
              fontSize: 5,
              fontWeight: "body",
            }}
          >
            Quiropráctica pura
          </h1>
          <p>
            Nos especializamos solo en la quiropráctica lo que nos permite tener
            un mejor enfoque y no usurpar funciones de otras profesiones de la
            salud.
          </p>
        </div>

        <a
          href="faq"
          sx={{
            width: "350px",
            height: "118px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            viewBox="0 0 490 160"
            sx={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
            width="350px"
          >
            <image
              href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAesAAACiCAYAAABh0+WxAAAACXBIWXMAAAsSAAALEgHS3X78AAAb
                      6UlEQVR42u2dT5LiSLKHf4zVvngnSM0JiraX+1SfoJgTNH2ColYsm9q9XE3WCZo8wZAnaLHHbOAE
                      I04w5Al4C0UkkZEhJIEEEnyfGZb/SBBSKH7uHh7uvd1uJ2gHvcf7gaS+9+vVbrLccnYAAG5YHxDr
                      2gU3dn7M+z6SdHfiW20kpa6oS9p63293k+WKqwIAgFif6jmG6Esa1PCWWyNcdeAfkyu+A0mfW36t
                      11bAnXOS4L0DANywWBthjs1jUIMnCc1jvfWt452v8NABAK5IrHuP931JY0kjxPkqefVF3Hrpu8ky
                      4fQAALRcrHuP92NJU7U/HAzNEgq3p3LW1xH2mm/i4uWlvGUlN8+hLOluskw56wAdE2vjTc8lPXA6
                      oQYWnAJJ9SQhtoVXlcsdyTPicnNPMPwAsS4v1itJXziVANBio8+NIqTaR3oqJ1eaHR8XjzD0Hu8j
                      Y9RJWeSk7xl7UeDfjomm+OcsaFCR19Jise493k8l/cFpBIAb5cUI4CERzBPOUMTgTfS8baBWjGN1
                      K+qyCYi8f67YatqkWJvwdyrWqAEAoD7WRsATSQk5EqeL9VjSPzmFF2NhBrO12t3vU8eil65r/RMA
                      bk+850a4E8S6uljPJX1lHLUeNwxlBd1ma/e1D0dFB8R9bb66oasuFIKB8MS3lVMQR04I0kTMjilI
                      lJeR7r5eX+H8llColIRVKDuG5Yzl1bV64keJNSHwq/XUpfeJJFbc++ZGcCdk//vQWHi94jGyqDli
                      4RtVvgF1aeMolNHtfn7/70nguQPlJ6Mu9HENtygZyh2b/u//LGEUYHBe7705vLaqjMeKNSHw2yU0
                      absCX0bE23DMKvD2ANzx8xT4/UpZaLa0KJg98QPHCItzxqAN/ZY1XMqQKpzo5kdAFDAWuxbteNlN
                      lsObFmuzXWCFRQoAcHUeqQ4Y4u7vYh2OlIT44XzvL5s0YQh81xWVS64k1ib8neCJAABADYaBjRhY
                      o2Cg90tu7tc6HMSN9pnmsy6FykuLtQnfJHjUAABwBoryJOp4/ZmkaRdEu5RYU/wEAACu2Ch42k2W
                      0zYf5KcS3vRMhL0BAKAbrJUlBM5dj7lgW2J3Peve4/3IfGDC3h+tMDc0M9B+zcUSiSIkAACXxt2u
                      91ZTQPs92d1es+493s8k/cZ1frPS+s5FPrcQu8YB24wAAOoV81nbQ+BSIAxu1qevTait4Nksw5Xj
                      FUuHtw1YcbyUp/xZVHMCAGiCOx1Xse+ynrXZQ/0frh8AnMjaM3brMrq3JQznUPnSIiLdxtLVszk3
                      QxGl20iKu1Ke1Pesx8wxcGbckqSbggmz6O/QHpoQgs9GrH9q35HpbGuOXv/oWqnaoMJrn+kaHHnH
                      l8hZo+093q8k/evGx2hf0tj0ubCsvKQ0u8872k2WszZ51okIuQJAt4y9Q9WpHg48d1vwv2Wf8zbJ
                      54ion4Wcl5WcaF8cpPHkp4pNW/IatYT+XkVDFpKmjqHhGhxtiHa8Kiv7Or20B45Yd4MXcyPbmzf1
                      bhC30g8JaADXa5CE5ue1NzekjvhLgXKbxqiw80bszR1uUx9b//yocp05xovyPNkjXtM1OOIjBX5j
                      BHml98snaZtC5L5Yd71Bx/qGxMptE2etf7/Nof+1DZYqnMaiwHsEaIKN4/nnNRXxhTn1xK/RaMEJ
                      dUGetV9WSdt6AXyxpvXl8ZNnm9rtbbybKpH262LO2ptrlfphLlfY/YQd+7pxSW/eP54Ykcm17qVw
                      96O2G1nWeHw48TX6GJQ34WjY+aBy57IcoR4rC6efMge/7ibLfifE2nzoqSgt2iZezcDe1jhxh3pX
                      u9Zy5fCPCU25XvxXc1NOd5Pl/MD/DZUV36mz3u9WTPi3cm98ruE18kK8Zderq+J6oGWMfLtumjr/
                      m3iv0a/4mm27jk/KSn5WDYkPlSVGP5QwJIvmz+fdZDnqkljHkv5iHoADA76I0GSx8CYZ693jXdd3
                      3k+lCx48HDbAiwyNSNm2rWPE/FX7Zbe4prFiDZH5IaPe0afIzC/DgmN49l+zhCP6a9Ws/EuL9VCk
                      9HcZu61lIGnE5Hs2Du3t9SeAVC1OZCmYKKMKBlvZkGJc8nkYdrdx77hRvviI6/9OdEusZRdGANsq
                      1gk3xU3woizslDiTsDsZ+5NtmbXpom00RSJ2iFVJD7NSo/m8bNVzWdieAFYRw3OT1HneL2hQHDIM
                      qmxlagJ2c9TP2oyHvEjCZjdZRl34IH6C2UzUBL91QtnGTa3d5QlxkVd2aEJOVVy96hhRLPO6ZUXg
                      liblkAEXGk/B89vmsOSZjZDQPREax3m/uzvj9U1OvE/qOt5FCcdzsZss406JNWvVAIAhepRxeS5q
                      XS4psQc6SN0GlNmFFDuPcxqyG0mDLnTfcsX6SdI37mcAgE7hJyG6xoRvWDSeH1FQGc16/vY5bclc
                      X5iIwFNbhdutDT5gzAMAdA7fE30oENO2Gx5zR9jPtSz74Jy3ads9665XLwMAADiV3y/dtKNIrKle
                      BgAAkHn4iT4uL6SX2vXgZ4MPzAEi2AAAcKrguWKXFDw/Nl8jtbs+xEUyyEP7rBFsAACogi1skhQI
                      sUsdonypHvdnD5V/EGsj2JGyRX426AMAALzn7KVJP4V+uZssU7MHbyXKVQIAQPextc2L1pxt6N7W
                      IP+cEym4vFgbwd72Hu9HxsMmJA4AAF1mq33TkA97qc0S8EjleiqcfatzMAwe+AAJgg0AABdk4Qjl
                      qXrkJ79Vfc1/nLvxR6FYG8HuK9soPkK0AQCgAdrci95u5UqNZ562zrMOCPdQxb1EAQAA2obNWrdl
                      WCMdrpL2XdKsDSVIK4u1J9r0vQYAgLayUNbLOg30uB4rP4FMalkls0pi7RRoH4lWmgAA0A1sK88q
                      7Wl/SEra0qa1tFj3Hu+nkv6o+eSx/g0AAOdmYzzuvvGuyyzpriWNLlVu9FOF58Y1vzdCDQAAl+Cu
                      gvNpM8dTXaaPuSTpbxWeO+P6AgBAy3iW9A9lyWDrGl/3RdKvyta2k4ac1tJUXbNeiRKkAADQfTaO
                      l12GV0nxpcLgpT1rU34UoQYAgGvgznjMv+wmy56kv0v63YhySNjHlxLqSp61SXWPle1LG4k1ZwAA
                      uC5P+0nZkm/iOae/XFKoS4u18aqnkh64ngAAcMX8oixL/C/v9y/KqpfNWifWplXmDJEGAIAb4acR
                      698OeODTVvSzNkI9Nt404W4AAID3LIxoJxcT697j/ZOkb1wLAACAg2yUtd6cNllD/INYm9D3f2p4
                      bVvezRIp21Ruy71RwQwAANqG7bCV2DaYJm/rryLN202W/XOK9VT1lhUFAADoqtecqny/6+fdZDk6
                      l1iXsSAAAABujYWyiPG3AoGfKsscry0s/jfOPQAAQCkiZXVGDnEn6U9J/+093q9MO+mT+cS5BwAA
                      KMVdxedH2tcVr92zTrkeAAAAJ7FWVku8llD4B7HeTZapsk3hZXnlmgAAALxp4g/V3PTjUFGUgbJt
                      VpH2DbqbqGS2UfXQAgAAwKWwWeIuibLks6SJ/dahbHDbsMM+6twLbfdeHyP6tgG4JULkAQCgJvF9
                      Un7Vzmft916nlzjAd2Lde7yfS/raUFhgbMR2dqIBYEWbeuUAANAkL8paY6aXPhA/G7yJUmlrZSH0
                      seopYUpPbQAAOMV53Ko4Mvv7pTpshXiXYGYqr/ys+T2myuqmUmscAAAuydroUZFj+qNNQi3lN/IY
                      6vRwNQAAQNdY7CbLuG0HFaxgZoqXR8ri9edkwzgBAIBLCbWyZdvWkbt1y/GyaZcJAADXzLOyFpdp
                      Ww/wUBjcPgiFAwDANfOqbOk3kbeevZssk1aKde/xfqSsCDkAAMC1sDBf+yq/q2i9mywHbTj4UCOP
                      PtcUAACujE7X5njzrHuP9zNJT7vJctV7vN/lhAlW1/ChAQAAjvDKLYnz/dbRxrSpdW9XrGNJAzVX
                      AxwAAOBasA6sFetU+zXvWNmOqnld4t3T//1vUyVGAQAArlGk59o38rBNr6TwevjP3WQ5rsWzNkll
                      U9EYAwAAoFZ2k2Xv1Nf4ZF5o1nu8jyT9wWkFAIAOervHbjPeKAtjv607m0dsHnnLwnYdO3F+lwSe
                      d1RPa9MBc6AslL5116wHkv7NNQcAgI4JdZnGHHn8UJZcvQ0IZl9Z68zICPhcFftVG0d4ZER3VeF/
                      ZsZQWEuK/RaZqfeBFyLZDAAArl/w52qgZ7UR/LiqyFsn2gq861n3jeVAxTIAALhWNnrfeatvPN/P
                      3nMS85hXFdkm8PdZ/8Z1BAAAeMfaCPfTpeqHu2K9xasGAIAb58V424OAJr5KisuuPTcl1kNJY7FG
                      DQAA18FG5RPPFtpngRf9z1pZAtjsXCHywhaZb0/MKpxZIvOQsT4GYo82AADcFq+7yfIs/TRKi3VJ
                      MX9S+W4mAAAAXeensvXsgfHKtZss47rf5JMjtmNldcF9QnH7N6tC+x6gbsk1AACAW+CbeVh+b9Sz
                      DuyxBgAAgPI87ybLURMv/MnzoAfO976XHBd42beM2z6UcwQAcJvMmnrhKglmIyPYQ8QIAADgAz92
                      k+X00mK9O/OHfjVfMQwAAKArfN9Nlk+X9qz/POMHrrI/DgAAoA7WOn1Xky1pmkha1VH1rNLWrQt4
                      1wAAAOcU6n5DjqLNbdruJsth1X/+W8Xn/zAWAwAAwLXxRc1FdD8rqxB6VIj8qKIopkOX3QA+UFbN
                      jGIoAAAAB7zrYyue1VbBzIi4FW8r5Kw5AwBA17Fr0AOd3j9joax71/xiYl3ggQ/xvgEAoIP8z26y
                      3B5oJX1sUtpCZh1bWd/s1UXEOke8h8pi9mzJug5rk+gJAHRt3lqZR5Qjvj7ftS+t/aXG95dxaBMV
                      dPA6q1g7oj2Q9G/GDAAAnIG1sjD2m/dqnMfUEc5RzU7kT2VRZSvuz8rC30f1wj4lwWxsDqSfY2m4
                      JTgT728DSV8ZPwAA0AAvjggneR6rcRxHDQj1W2EUk8uVnrrX+lixTnT6IjsAAEDdbJSFrO1acGQe
                      FptLVXcfh7V5z9luskzq/lCVxdp41f9lPAAAAOhZ0rSOKmWH+HTE/wy5NgAA0GFelS3Pfi3xPAU8
                      8I32SWGlvWgTdh9q39kyUUGoHrEGAIBbZeqsKYdaQo+UZYl/9oR7bIT1KC/aJJfZBLdI+/B8pH2O
                      V1jojwyDj4xos24NAABd9KzHyrLBrWi+2+cc2FP9czdZji91wCdv3XKqlkVqZtEeAACgDDYLfKTq
                      NSB+302WM0/ffMH+oWz71TaghYNjt2WdRaxzBHwq6Q/GDQBArmeHU1MvayPSUx23NfiD53ygNfSL
                      slD6ynue3bKcar+Hu3A9+mJibQ6edpoAAIfFRaIMc9MsVC3iuzBfi/7nVVk1zr6kbwXPG/teuyPy
                      Q+3XzFNlSWdzX+ARawAAuCZsprYtJzpUO8oiL7QvEGaXjO9yvPb5h5B8g2L9VGBtAAAAYFxkhsU8
                      5FE3LtZGsG2lGGvdUGIUAABulRcjypW3f32q6wjMnrGVPsb4bfyfbV4A182r9mUeByKy1iVsqUwZ
                      MRmqXDeqa/jckepN9rP3Qd85h6+ShqeUIa3NszZbuP5izAMAwA3zYzdZTo0uJsZR/fXUeuG1hsF7
                      j/crkdkIAAC3w0b7LO40lPVdB59qfr2ROWD2DwIA3KZoWQ5tffJ7PXfxs46a6K51Fs/aeNd9ZXvP
                      fmPsAgDcFAtlbSndSl6RsjVwV7h/MTrR1VymxW6yjM/5hnWuWb8VQ99NlolTpNxmg3fZigIAgNtm
                      7WjYejdZDjon1qYKy1RZ+bVZjrftinasdmxSBwAAOAYb9l8pqxeedsKz9sQ5dkSZLVsAANBFMU70
                      fh0+dr5Pzd9XTTbwsNSaYGZEeobX3KgVR1czAIDmWCur5Z206aAarWDmCLi1SMYIzcmDaKt9tML+
                      bEHIAQBOc4oGdXTJ6pxYe8LNPuxmve4qou0LfSQiIgBw23zfTZZPbTywT2d+vxSxboS7I4TWXge3
                      /+pK7zvV4KUDwC2RtvXAGhFrs20r1r4NGElm7eWzd31otgKH8CMyLkmF17E7RA7h79c9RFxynlkE
                      fsf8dHtslOVXdUas69q6NXDEORbhVOjuDawbG7/u9pOt+d5OWKm7HcWppRCZh+WtxkIDlBHslXn/
                      qp39fMMjCbx335vItzlGRt45iJgPW8nfm95q1Vaxjs2NMnAGtT0RQ+WHvhdYtQBH8+oJWVlPNDVC
                      nHgi7IqO6/lyjxYbOyEDYnvo/HtRgbzk21Akoy+WE+vyrN+M1N1kmfYe7/ttTC6rTaxzBNze7ANl
                      BVNY/4S23rDWq4oPTKiupxQFvg+JZXKMJ1lmz6Zzf5Xx8Pzf4e11D7eMpzvOVk60wx2T7vhgl8h7
                      A3fmGECROT9fvOeMm2rI0RqxNl72FGscrtiDLetBVeHQGi6eFFQZo66h6RudqWdgyjNSiwy/POqa
                      7zfmeCLzdVjz2H9rX9k16m6RGUn6D/dNZ2/2qbttwdkj71rsMYYYwFWwCQh5WtIYLYwA9R7vxzou
                      qrpwvN+hqu1M2TifwxrAd948N/SWgCJlVcjSmxDr3uP9VBQ9uRYWMmX0zA2z8tdxDoRhyxBXsOIx
                      DACgyNGIjWHwNUfApfDSz6uyVpfzm/CsjXXy74KTiYhf501irWt/PW1bZ71ctgMCQN48tJss+yYS
                      +Jcj0HPHEcibL345R13vNon1TMX9qxHs+nlRFi4at1y83HBbXsayH24rE2bzk2isZx7y+kmyAbhe
                      fjWtme19PzKPonv+eTdZjq5erM2JSZgEL+rZzh2hi7RfV052k+XIa08aqdtLFaFtMmngd3kGwaiE
                      UVn3cUYi8xrgmHvoSfuqimNJfxwSa3PfPwUcl7WkeDdZbp12zu49+aws+3vb5hNyqlhPC04gXH7A
                      z7Uv7jCsKBw2zI1XWh13fyzZ3ADlWChLdE2MozEu6WD8lPQt8PuX3WQ5DGiX9bytwf/U9nA4nnX7
                      PedE+7Bu287z2txIFhuKjsWaMrRjfKZ6n7j4UPD8lfOwY3qo/d5l5rrmHIuROe9DM4f8liPmZeeW
                      V0mR8agjcw1zl9fMmnesfRQyMs6NdVpsxC65RPvMk9esjWDPRaivadFeeYN0gccGcHGB2Va8B92I
                      S3RD8+ahnKWNcUpCxUkS7bdwHbMFbKqPdT/s8uFb6Nvo2DhwDGXGQOoYdp9LHNNc0qxq2L3OrVuu
                      V1UGKuzU4zkIwa508xZ5VwBtEbGyRvy1zZ+vytaepXBRlE1NRs56N1mW3n7qleV19Ss+Yl5ZK9sy
                      Vjr03lQFM3vwqXKaAuT8b152r2sAIOznmwygXeeWawlNGbBt8vSriPH6gLOyNqLv6k6sLNx+J0m7
                      ybKXI8pD7UPe28BzIu0rwb0LrRsNtH+Pc87ri7J18uQiYm0q1vyz4gDxiYxI23Uj90TZn4sKcrjr
                      TZHOkwEMANBl3BC9nWtj5dfJl+dExS0yJp/Nbhh7XMMcz/e71QtXOHuP90/KEtbeKp6ZpLRxjnEQ
                      TGSr1RGuWaxj7TelQzu8KXsDbivcTH4Fs9jcjHX1ut4Yg8u2ZKwSLckz9AhtX2Zidw1qt6Wk9Sz8
                      bXTuxB8XGO2R83MoP8Pfyvdw5Fi8K7gPMPjPJLDe2Djlnq6aiHawcYcj3sF58hwV0KgNDmUm5bl5
                      pMpCSEOdfznCdshKKvyPLxix5wm4bSFvIbzsi5srpAPHgIpEHkST572vcL3tW13i2yhbv3U926nq
                      2xb8wzG6rONhx/eLEeq0QNtGet/NbOyvNxv9G3mRibSumuNNrFmP9HHTOVyPl289bjsAh47oPehj
                      /10rCHaQP7RogkgDHp8V+MSZQNOcyTVW/et8a+/8qoKn4UcdkpxjPuStVj2HiXPefgv8faWPBWpC
                      UZpX85U1+XL34TWcp2dle6rTgI7E+hilXWufHW7v19gZy4PAmP79XK0uvXVse0z9ut6/yX7WQ2Nl
                      fOXeag1ty4Z+VbYGNDd7IW1ix8gRwCoZr9+d59oiMF8KhHGb45HfHThmt5fw1LzfyBGrUKW1Mq+d
                      Z0jU6XG5n9n1rFPnPUcqH/Ytc33c92S5Aj540jkaMjX3ceKGmXuP96O29Zo+izHQlFh71sbQTMp4
                      2+3yKFPHEnTXG88Zjgta107jjrmzF3Kk96EoeR781IamzHP/PPC+B/vaOjsTYkdko4Dl/pZY4oz1
                      WPl9gB8auJ4zI5iHjON/eNGC2PO2t47oDrhXL3Zvzp1r4o6zn9rnj6ghQ66MsX8o0hTCPT47Vp+K
                      9hib+88Wo0mce3ysrNBJjFg3K9zWc6q7oThczjOeO5PIlxNfy3p5rsV9VLUgc7PHAVG3Ivx0SlKI
                      iRwNzfHNShzLk5l4fLG262nu5JNU8G7dkrIjRPaq7zU3ouOKXar8il9t4MUY3TPvnogKqomNc4zP
                      n7vJcoxYn0+43cl0oPaW1ITmJhs3qamv/DVUWyThqe3F9nPGeqLbDf8uRDOTNnvyU2XZzKsjx/ZB
                      D9ca2s7eYzvnR8qaa6xsFCtklDv1wW2y2cGIGGJ9GSH3q8PYr6x5gd0y0dc+bFiW7SUK9psQuTVM
                      45oN0xd1MzfENeAondsO8U6dn5MTXsvO16Fx/uoIdWTeZ1awLDVWFsVa3erFaaVYHyHo/iA517qb
                      mw0rFRdryQPPoxq/5GybcAXxUI3fV2UJLvMLj2HraYwaMkKpeAatNLZvcc35VD519cBNODRk+SXO
                      ZOh6MZHKZ/mGsKFbm4hT2/65gPcVq3o7y1vhhwKZ1uZapN71t0st9mHF+7M5z42ItbmOU89gCGWe
                      N73sg1Cfl5/m6zdORb5Q632nPrh2z/omLk5mbIwQ7mA0Y1Y18cyJxhxqkzfVCS3wzHusKlyv54Dx
                      0bbSjdD8mL6m+9s6PonnQK26mHOCWMMxwm097mtet88rpOGy1REt5iqcZx2zNmY86rmOW3tdmM80
                      M681lPQvhAY6xg91NBEUsYYmhDsvvNtlns1Nvurg9Rgri4B8KfA2nrTPcbDVjZIcgyHBs4YWGc2R
                      ins93+SWKsQajhXvY0p6PhuPcFV2HT5QWi9EmeckqiE85hVRsKy0L2SSKgtvpw1eA3cL4qHP/65y
                      mL9P+8a3ekE7cHN4tp5oDwOG5LOygidpU/cYYo1YX6uAW+G2yXWHJv//uaawldckXtpXXBqpfBOS
                      vO5efhcpH79gxbu/lTnPxhAaX1HUBOoRz6Rg7NmxnionL8PcG+7j4UzHPUbEEWsoL2LW04s9r296
                      bELVFUQkrBec5xE3PZn5WeJ2svUNjUHAWIiV38AAmrtOhwyyEO54qoK91knT96dX3CRvC2qoe12e
                      sVDaOAXEGqBOUR8qW3Mu8sjd/uGrEhNgpNtO0MrbMlkUwWiCD2U88QYBsQbopmiPPc/C7vdf1eX9
                      BML4ecQ6vh742vHYyyay2QpXK+dz54pazjq+/V+8LgDEGuCmjIgn5Rfi8BukrEKV23qP97bneOqL
                      qrL1z4QzDYBYA8Dpoh3jsQJcJ/8P5GjKdPsK5ngAAAAASUVORK5CYII="
              mask="url('#quiropracticaPura')"
            ></image>

            <defs>
              <mask id="quiropracticaPura">
                <path
                  ref={refSvgButton}
                  id="puraPath"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="150"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  d="M491,95.1c-65.6-4.2-131-10.7-196.2-19.5c-32.2-4.4-64.3-10.8-96.8-13c-32-2.2-64,0.7-95.7,4.3
                    C66.6,71,31,76-5,76.3c-6.4,0.1-6.4,10.1,0,10C59.1,85.8,122.3,69.9,186.5,72c32.8,1.1,65.3,7.7,97.8,12.2
                    c32.2,4.5,64.6,8.4,96.9,11.8c36.5,3.8,73.1,6.8,109.7,9.2C497.4,105.5,497.4,95.5,491,95.1z"
                ></path>
              </mask>
            </defs>
          </svg>
          <span sx={{ color: "white" }}>¿Qué es la quiropráctica?</span>
        </a>
        <span
          sx={{ position: "absolute", zIndex: -10, top: 0 }}
          ref={refBackground}
        >
          <Image src={background} alt="Background sección quiropráctica pura" />
        </span>
      </div>
      <span
        sx={{
          position: "absolute",
          zIndex: -10,
          top: "-100px",
          width: "150px",
          right: 0,
          "@media screen and (min-width: 779px)": {
            width: "360px",
          },
        }}
        ref={refSideImg}
      >
        <Image src={bjPalmerSide} layout="responsive" alt="BJ Palmer side" />
      </span>
    </section>
  );
};

export default QuiropracticaPura;
