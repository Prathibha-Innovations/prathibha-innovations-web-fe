import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VisionMissionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visionHeadingRef = useRef<HTMLHeadingElement>(null);
  const visionTextRef = useRef<HTMLParagraphElement>(null);
  const visionImageRef = useRef<HTMLDivElement>(null);
  const missionHeadingRef = useRef<HTMLHeadingElement>(null);
  const missionTextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Vision animation
    gsap.fromTo(
      visionHeadingRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: visionHeadingRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      visionTextRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: visionTextRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      visionImageRef.current,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: visionImageRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Mission animation
    gsap.fromTo(
      missionHeadingRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: missionHeadingRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      missionTextRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: missionTextRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-prathibha-bg-alt relative"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center">
          {/* Vision Column */}
          <div className="order-2 md:order-1">
            <div className="max-w-lg">
              <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-prathibha-primary/10 text-prathibha-primary">
                Our Vision
              </div>
              <h2
                ref={visionHeadingRef}
                className="text-3xl md:text-4xl font-display font-bold mb-6"
              >
                Transforming Potential into{" "}
                <span className="text-gradient">Success</span> Through{" "}
                <span className="text-gradient">
                  Mentorship & Collaboration
                </span>
              </h2>
              <p
                ref={visionTextRef}
                className="text-white/80 leading-relaxed mb-8"
              >
                To foster meaningful connections that spark growth and
                collaboration by creating a platform where talent and innovation
                thrive, breaking barriers, and inspiring opportunities through
                mentorship, skill development, and mutual support.{" "}
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-[2px] bg-prathibha-primary"></div>
                <span className="text-white/60 italic text-sm">
                  "Success thrives on simplicity, guided mentorship, and seamless collaboration."
                </span>
              </div>
            </div>
          </div>

          {/* Vision Image */}
          <div ref={visionImageRef} className="order-1 md:order-2 relative">
            <div className="relative overflow-hidden rounded-2xl h-[400px] w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent z-10"></div>
              <div className="w-full h-full bg-[url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAPEBAQEA8QDxAQEBAPFRAQEBAVFhIWGBUVFhYYHSggGBsmHRUXITEiJSkrLi4uGR8zODMtNygtLisBCgoKDg0OGhAQGy0iHyYvLSstMS8tLSsuLS0rLS0tLS8tKy0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAEDBAUGB//EADoQAAIBAgUCAwYEBQMFAQAAAAECAAMRBAUSITFBURMiYQYycYGRoUJSscEUI2LR8YLh8CQzQ3Kikv/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAqEQACAgICAQMDAwUAAAAAAAAAAQIRAyESMQQiQWETUaFxgbEUMjPh8P/aAAwDAQACEQMRAD8A5sCOBHAhATyj3hrQrRAQrQGICGBEohgRAMBCtHtCtFYAgR7QrR7RABaK0O0VorAC0VodorQAjtFaHaK0dgR2jWkloxEAI7QbSQiNaMCMiCRJSIJEYyMiCRJCIJgIiIgkSUiARHYEREEiSkQCIxEREAiSkQCIxEZEAiSkQCIxEREAiSkQSJRJFpih2ijsDbAj2j2jzA1GAhARAQxABwIYEYCSKJLAYCFaEBHtEIECPaFaPaIANMWmSaZJRpgnzcWggK+mLTJTTj09je1/SAEForSV9yTxBtGBHaNaSWjEQAiIjWkpEEiAyMiARJSIJEdgREQSJIYDRgRmCRAbFU728RL9tSwwb7jf4SqCwSIBElMEiAEJEAiTMIBEYiIiAZKRAIjEREQSJIRAIlCAtFHtHgI2o8cCPaYmghCEYCGogAQElUQVElURMQgI9oQEfTJEMBDSleSUqV5sZdl+o77DqT0ktgUsJhN9xcS0uWHm1h0LbD6mdJi6dKgq+HZn533/AMTJxtZnudIHoNzJkmtGSy3tFU5O1rgAgkAWKkm4uNge0p18vK7EW+ItNzNF0g0gblGS1xe4KAk6r9zYC3EzEruvW47Nuv8At8o5JLpijlb7Rk1aBEgKze0pVB07MBcr6dx3H/PWZmIw9jEpfc2uylaMRJGWNplgRkQSJLpglYxkREBpMRI6g2Nuel+I0Myc4x5pABLFyRe/4Rvv8Tba5nMYrNajqVZja/GwJ+NptVclxGMrVBTphSoHiO3ugH3QvJPF/r88POcofDVPDdgTa9xxPVhgUYKVfucEsspSa/BnlpLRxjp7rEfMyEr6xX7xtJkW18G/l2f8LWHwcfuJvqQQCDcHcEcGcCrb3nYZMx8NR0I1KOwva37/ADnJmgo7R2YJuS2XTBMkIgETA2IyIBkjCARGIjIgGSEQCJRIEUe0UYG1HijzEscQljCGogBIokyiRoJMokslj2hqsQEkorvIYjpcvyen4KuWu7bBRLFZQi2HA49T3kOR0zuTwq7fE7fpeW8DhBUV6tRuCbCL+56MZS49shwuFaoe5l7DYDzLt+IfrFgri+k772mt46U6bVHIBCXI5IJ2t8bm0hbZnKVIx8zwx3bSOVu4uSLIBY7235mFiKVp1WKxSGn4ofwxZLhjcXKDm3oQODMbH0hpDkBL8MLGk3+obKft8JTW9ExlowMNYVVPADCbXtFRpGzU7WtY26Ht9xMKvSZWIIIPNvj19R6y1k9Yh2DeYWDWbcEqf7E/SOS0bRW7MupS54233kJQixtsePWbObOlWsCFWmpKg6dgN9zNCn7OU21MK16Kvp1enUykvsU8ij2coYJljFU1V3VTqUMQp7i+xkLqRyLX4jNEyIwGElIgNAo6nI6ApYXdlFSt5wNtQUjy/YX+c859s8vcVSWF1Hu9fvO6yHB6kFNgLG9Qsb+Ku9x5rXItba+205v2/qaTYHh7T3slRwRrqkcGGPLJK+zghldVg7pTdkQjUyqSq34BIlB1tPTcmq+FVooqagKdZlY+7TqFBZyOCSVCjbrtOM9o6aF2q0wFp1KlRlUcAazpt6WtOCGZNL5O3L4zin8GLSNiJ2eUqdAYi2pV09gALfsJyeCpXqKDxcTuaK2VRa1hM/JltInxo1FsREAiSGCZgakJEAyVhAIjAiIgGSkQCJSER2ihWijEbIEe0ICPaYlDAQ1EQENBAQaCTKICCTKJLJCtJaA3ggSSlzIYjrMiH8t9uq8fOS/w9O7XLDVvyAAfpKWQ1rEr+Yfcb/3mliN5CkZzVslywqtQBgVUKT5t31eltrWg5ppckKpKaW8qkB3sVPlNiCdrnnYdJGmOUUxScEMp8jjcjsfUekrYkvTIdPdY6tt0LDn07W7ccgzbSVI5dtlXwmI8NkrVGJRiaXkAFv5Y0lW3ClQTfci+0u03p+H4bu1FkO6FqdRnFtwQq/Y9o2FxNzpxNQ3te4AU6W3UbdNJA/W5lbF5VTZkZGtTqOEUD3iSQLL9een2Miu3svZfjsJYoyGw/EVC0kLE2UAm4J7C3qOZhU0X+KIsy7P20+4ZuYvJFYCkoA0iw7C5Fz9uZnYPBLQer4u9ksp9T/j7xOfKJpj4qWuzJrlFc61LLuLA2PpDw7VDhaxVwtNGAKn3jftDw2GWtV0MwVdzc7CFnWCoUrCnULXHmAPXpHHrZ0SauvcyyimkLKNer3gTcjtaVHv1vttv0lqkz0ilRdiDdTsftAx2Kas5qPbUebAAR+xSuyoYeFCa18QkJuSQNXQ22672gmAZUXTTLatHWeyeKqOtcOqlFClKwAGvVqupF9mFhcdLzzP27r3qleikn77zqshoHDpiHo1gC4u1CpqKnfd7833tPP8A2nxZeoSRufW/M9+SUsCk/wBjz4yccsq1fZfyjHtWphNekgaWIvq+R6SDPsPcKF4W4lT2VoFqjP0A+81seAxI2PfsPnPBmuGaonuQl9TD6hezuTAJ47C4U7dtXQGabS7k9G+FFEEEMyVNShrDfSb7bkX3+MWa5c2HcKTqDIHVrEXBJB2PqCIlybcpGEnFPiigYBEkMAiUSRkSMiStAIlCIiIBElMAxiI7R45ijEbgEe0cCFaYDBAkiCMBJEWMQaCTKICiSqJLJCEIRARSRGjga5Ugg8EToxUDqGHXn0PacfTe01cDjSvwPIPBkNCas1XfjjaRU8SASjX8Jz5gPwnow9R+kPWHHlP+k8/7y5lmEospL71A1tDbD026wutmEl9zJx9BUe7G4CoAoIBcqoXkcLtz8h1tWpGpVcWaxTdbeUJbcae06HFYBG1NoWwAvaw6f7zn1osGumy/mbYW/f5S+RC30Bh8TVJ8JWYuzmzE3tfn/M0c0y5qVEMXDdSepJ5P7fKUqlVUvovc+83f4dhM7FYx32LEjsZNpm8YO0yq7ne199jbrCNCooLFDpItdhtGQsjK1twbi/E0sb7QPVpeEVUDuBKNG3ejFdyQATsOJGYRgmMsAwTDMAxjMnP3daepATa4Nuf8TgqlRnPVj2F2np7QaCojIzCyeIuqwG41DUPU2ndgzyaWNKznyYlblYPs1kaYfC+Li1IDWUUwSvmfZS5G4AO1u57DeLPckqVCPDKJUawZSCioLbWAG1xY6ed/lNrPfbajSYMlInVYq53KWtbSOL29e9jvecdm2ZVK5Nan5rnfWzA37c7fAzvy/Qxy0rdfn9THH9fIly0v+9i9kmXVcNU0V3ZFcHc2sdXzJt14vedZjMgrvTpqGR3QMUFxeorWNgTa5Ha3XmcRgcyq17JXDD+tQFt6ni/x/Wd5k+DrhRTNS67NQqK6HS3Y+bg/vPMnt7O5ppXo5OohUlWBDA2IIsRIzO1zbLmrjxKtNlf3HdUYtTbuQB50P26GcrmOX1KDaKi2vurC+lh3BmVUNMomAZI0AwGRmAZIYBjQgIo8aUI6ACEBHAhATnAYLDVYgJIogSOokqiCokgETEPHtFHiENDV7RrRHYXJstwuo8Am/wDYn5GFWBap4kiWkzFhbzHb12mJQxaPfSdwCQCCC1ug7kwKmOUMVB1AKpLA7bgH7XkOOrNFjk3VHV0vaBwjKSST1mVWxhPWZorg9fsYZv6/eGn7k/T47onGIO4G99pWYEHeXMpqKtZGb3Qd7yX2gxCVKxZLabDiURfqorZhjfF0bAaRaUjDW1xfjrHr6b+XiMpa0QGCYZgmBQBgGGZJhKQeoisbKzKGPYEi5lxi5NJA3Stk2VUqF2qV2Oina9NVd2cni+npyfkZZzTB4d1NU6NI3QUt7dRqTooNrAbsRxYXMWY+zos9TU5pU2LmiTZCQOb9VAAufRR0tPNszzd2qEISovu3Bf49x8Z9A4f0mPjCrfbOCDjnnybfwR53VcswU3pknzD8Xxl3IcY1LQwo6yx02C62qDrbm217EDp2l/IaFOsdVWwv7qkbYhr8HsNvn8NpXzCov8UiU9wNQfqFOk+Uenr12nmuXO1R3/43TfZFnWO1VeVRhzfzNxcGw6/SdRlWZih4FF61aoj73AVLDUQNIJ23H3nn+Lpu1WwFhpUcWA2m1jKVloPrRWFNNIvuLKpsfW5hKPSFBxrr3PWKmdIMS1LxaZ04cOwqWVqq3YXt+YAKfW8kxyU69BsO9bDuw3pMHF1BFweelwfgTOG9sab06OBxtNgW8FqJKm99NiAR2003+pm3lGFrbUgHAsUpObgaCSaWr1RhY91KzLj0Txh86OXqoVNiLH/n1kRmzndB01LVVldKzCmTvekyhtJP9LFlHoJjmZtUzVO1ZGYBkhgGAARR4pQjowIQEQEICcwhwIaiMIYEQg1hiCIYgSx4ohHiAUZhcFd7MLG21x2+0KKFgtFB8DYDRYkG9m2+4/tKdfDvYg02sTclG1fbmbJjSeP2N4+RNd7OcrYrQAAHQjve/wB5ay7N6oNjZ1YWYNvt+02GF+d/jvKNbLkJuvkP9Ow+kh476No+TF6ki34itup+IPI/vBMrfwLqNQ81uWXp8RFTxPRvrBSlB8ciIlhUlyxuywYMdWB4N4xmpztUCYJjmVHx9IVBRLgObbWNh8SBYfOXGLl0BZp02dgii7MQAB1MnzZRhRpt4iEXqt+axI8MC2wY/EkA+kwc4xNcVVp0lqKikecKVNRr3DBjxuNuALbzfwuLoCmKb1UbFNdgzMCr1CPxKNgVFgO9gbbWPu+J4v0fVpy/C/2cWXI5q119vdnL517U13thqhApgjyISGQdtV7t895Bh8kSqnjN/wBvgOP/ACNbZPh3bjptaDjckpKWrh2qLfzn+rqqn8Xx4mTWzx7laZ0qdmUe7btbv69Zz503P0uzrxOKhtUwM0xjITTGxvuRxYcBZtezNNFV69V2D0wGYLp3DggXJ5O/HT9M00KTUWruRpSy00v5jUPC26iLDYECi9TEVF1WOmkXCvqJFiV695jKpIauF3sDMszp1q4FNTpJQXfcnYA7dpJn2b1HKi6jdjZVt2Hc/lgZFlyPVXk6dTtYi1lU/uRFnOAC1dJDbW6jk7n9Y/Ty/QXqUUqOvw2bHEZVTpPpbRVYDYqw2djYg/lV/rNbLPadKhCKg1KiVV8Ryb7IWU2B6W+kwcpykeAtMl01mh5rBtJq06tMmwN//KIOS5aUxVJi5sBWB0gm4Xx1Av8A6RMai/cty204nSe2OI1XBVAWrCopUEeXwUuLnkXJPTmcoZue11QHEui300gqG/VgoDH7W+UwzMn3ocegDAMMwDGhgxRRRgdMIYgiEJzEhCGIIhiBIYhCCIYiEOI8aPABRGKKADGMY5jQAEwTDMAwAOjWKG43HBHQiSNgKdTdTYdu0rGJKhXcG37zbHKDXHIrX8Bcou4OiristZN1uLSqMVUX3gGHfgzSrZgTs3zBmZjSrKwubMpB02vuOBfaZ5MUYzSg9HbF8oXNFHF+0SKpKo5Nha4AAvvcn4AmZ9fBVaFR62J1XVgFJK21Keuk/Ai3WbmfjCrRNRQNQanuzFyAVVW8o8oNgfpOazDMzjVdfdN0um3vDYMLDe/Fuht3E9FYlBtLo4lO0nHsvY3OGxqGnqYkXZ+hq2/F6EcW9B6WyKeVGkBUqX8I70+hq9duw9Y+BpjDEPVHmXcIwFh/7jt/TLGZ5wcc2kDSCdwbkXPa3A9P1MHJ9exdKO4dlfFZ89bTTJsijQrLsQvAWw2I/WU8XQpUvMzDUQCEXe/qfy/DmT5pglwgQ2YmoGseLEW4vxyPWR0cCj4fXqUuWbUL2fnb49ZSiopNdGbnd0tkOGw7V3TUbLqVRp30AsBx85o+0WXvTsoOpbtaxuBbb9pRyimy1lBBBVtXb3d+fkJdzXNi7qHAYhbX4YdeR8fSJ3y+CuKcVT2VsruA5K9FG4va5/xKNaqXqt6tYWv3tOpwOZ00w7C1QFqhY2CsLKgA3N+oEyMrem1ZCxOnxFJ8t9gbngeklS7dFtSckrNHAY96dTysykGnp3OxFSmODcde00MnxVStXwwLMQ1OoSBsD/1dTkL/AO0idqD1wqtSI8rcaOMTTPy2Hab3s9QpUEw9YFQfBqoSvn02q6jv0JDGw6yJONdCTyFLNH1V6x71qh/+zKRl3N/+/VsCt3JsbXBO5B+cpGYFLoEwDCMEygBjRGKAHUCGIAhicxASw1gLDEBMMQxAEIRCCEeDHgA8UUUAGjGPGMABgNDMBoDBMGEYBgMjrUwwsR/cTMxOCIva5X/nM1TBJgaQyOJxtPBu7PS20DqxCgi3c3Jt6DvK70XwNUVFYPYG+m4V0PNieZ1ePy5KtiSyMDcNTOloGFyylS4XUfzP5m+p4+U63nvbIWtJHOUMC+NIdwUp9Db7Ann4zocDl1KgLU1APVjux+cumMq3IHcgfUzN5JT9KCktmZ7W5UKuGpupGqjYm+xOsny2+BU39LdZzWZZc+GVVcbgg77qTybenE3PaSuaVmbY/wAUpQ8hlQL9R6eszs+xQxLD3RybIevN7Hvcz2PLjwnGFaSX4OTx7lByXbf8h+zz0qjnxfIoRmZgCye6QOONz6cSnnGXr47FD5b7FSHX5EdJNhcM9KiXW3mJNyQpspsNvjMejUqajsfMenBJ+G04o3baZ1y4tpP2NbG5W9OgvmU/y1Nri/m3IlHK8FU1iy30hmNugA5+80M2zyqUCFgwBAAZReyi3S3eBk+PC62KIbqE3uOSCeh6CO5KPRKinJuxsvw1R8QyENdaDE9eCveXs3xFSll+DorcHEPUqbbFlGgj6sw//Mq5Rm4FerVCEsaVWwDddm5Pwm7/ABVJ8Wl1b/o8JTpUlVWqBGUFyzMRYcgfSKTp7QRUqVMWIfUzHufWQmOYJnKagmAYRgGUIYmKNFGI6oQhBEMTlJCENYIhCIQYhQRDgIUeKPABRRRQAUYx4MABMBoZgmAyMwTCaAYDBMExzBMYxjAMcmCTGMYyGviTSU1RsUBYbX36bdd7SUmRYiitSnUQ/iUAWIBvrU3F/QGdPiK80V8kZdQYsZSo4pcJhiFWoQHdDexNUjdG+X9xOM9osI1LEFQhVdtN+nG206bFYOsmNdtJKhCRtsLUjbUDxMXMsepqKrITa3mDG5u19wf7z1vMtz5HPgqkokL5o9OgFH5FFmCsN9zzuOB1gZJjgr+IyBtILbHSbkWHp32l/M6NCthqRBAqqibEFCRduDw3IlLKcs1LUsSCNG1ifxHqPWcFRcTqcpqbtAZoKVWp5CDwN/Kb+o4+ksnKwmHD+YFgX/CRubL17XmHTwjl9I3Ja1hzcm0s5nrSym672tuL2/4ZVO0kzO48baLXs3l9666msmirrNjcDwyDb6idKMKKaGq2rx8V/NIYr5KbG4G3ey/IGcvlWNejZtRAYi/HuA78g8zpqrk6QfwIqD4KLD5zHK37mkaSpEZMAxzBmRQJgGE0AxiGijRRgdYIYiinKSGIV4oogDEIRRQJHEeKKADxRRQAYwTHigAJgGKKAwDIzFFAYLQDFFGigIJjRRjBMq44kBW6LVpE2NjbxFGx+cUU6PFV5YkZHUG0SZRnFStXrO/mBHhBhYPufICOG929/Q95ymb5d/Pq6H1Bb83B2F48U9XPJ1ZzwiuaQWfYZ6NMIfyUxzfoT+8zsrxDLqIJB08gkdR2iinKknE05yUnsHCY9hWD7N/MBs2/4ry5m+PV3Hk08+6Tb3j8I0UbiuQ1K4K/uPi8ahpIlje1gSAQACdInQmqrWdfdYBhta1xe1oopz5FpGyS2wDAMUUzAAmAY8UYiO8UUUZJ/9k=')] bg-cover bg-center transform transition-transform duration-10000 hover:scale-110"></div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-prathibha-primary/20 rounded-full filter blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-prathibha-secondary/10 rounded-full filter blur-3xl -z-10"></div>
          </div>

          {/* Mission Image */}
          <div className="order-3 relative">
            <div className="relative overflow-hidden rounded-2xl h-[400px] w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent z-10"></div>
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')] bg-cover bg-center transform transition-transform duration-10000 hover:scale-110"></div>
            </div>
            <div className="absolute top-0 left-0 w-40 h-40 bg-prathibha-primary/10 rounded-full filter blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-prathibha-secondary/20 rounded-full filter blur-3xl -z-10"></div>
          </div>

          {/* Mission Column */}
          <div className="order-4">
            <div className="max-w-lg">
              <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-prathibha-secondary/10 text-prathibha-secondary">
                Our Mission
              </div>
              <h2
                ref={missionHeadingRef}
                className="text-3xl md:text-4xl font-display font-bold mb-6"
              >
                Empowering Businesses with{" "}
                <span className="text-gradient">Innovative Solutions</span>
              </h2>
              <p
                ref={missionTextRef}
                className="text-white/80 leading-relaxed mb-8"
              >
                To revolutionize digital identity with innovative strategies by
                harnessing creativity and cutting-edge technology, delivering
                tailored solutions that elevate online presence, fostering
                trust, driving engagement, and transforming challenges into
                opportunities for growth and success.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-[2px] bg-prathibha-secondary"></div>
                <span className="text-white/60 italic text-sm">
                  ""Digital presence isn't just about having a brand; it's about
                  making an impact through action." "
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
