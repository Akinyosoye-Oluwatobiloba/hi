import React from 'react'
// import Link from 'next/Link'
import projectStyles from '../styles/style.module.css'
import styles from '../styles/style.module.css'
import {MdCall} from 'react-icons/md'
import {GoLocation} from 'react-icons/go'
import {HiOutlineMail} from 'react-icons/hi'
import {BsInstagram} from 'react-icons/bs'
import {GrFacebook} from 'react-icons/gr'
import {AiOutlineCalendar} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineStock} from 'react-icons/ai'
import {ImTwitter} from 'react-icons/im'
import {CiSearch} from 'react-icons/ci'
import {CgProfile} from 'react-icons/cg'

const LandingPage = (props) => {
  return (
    <div>
      <div className={styles['landing-page']}>
      {/* <div>
      <img className="mx-7 md:mx-14  h-12 w-auto" src='/icon1.png' width={25} height={25} alt="hand"/>
</div> */}
     
        <div className={styles['browsecourse']}>
          <div className={styles['frame38']}>
            <span className={styles['text']}>
              <button type='button'>Join the Community</button>
            </span>
          </div>
        </div>
        <span className={styles['text002']}>
          <span className={styles['text003']}>
            Quick access 
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <div className={styles['component3']}>
          <div className={styles['frame1']}></div>
          <span className={styles['text004']}>
            <span>
              I AM
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <div className={styles['frame2']}>
            <span className={styles['text006']}>
              <span>Online Community</span>
            </span>
            <span className={styles['text008']}>
              <span>Religious Resources</span>
            </span>
            <span className={styles['text010']}>
              <span>Spiritual Counseling</span>
            </span>
          </div>
        </div>
        <img
          alt="hand"
          src="/hand.png"
          width={22}
          height={22}
          className={styles['image1']}
        />
        <span className={styles['text012']}>
          <span>
            HOME OF VICTORY is a online community created to touch the lives of
            many who may have lost faith in God because of challenges.
          </span>
        </span>
        {/* need to be addressed */}
        {/* beginning of footer */}
        <div className={styles['footer']}>
          <img
            alt="Vector616211"
            src="/hand.png"
            className={styles['vector61']}
          />
          <span className={styles['text014']}>
            <span className=''>Read, Listen, Watch and Share</span>
          </span>
          <div className={styles['frame40038']}>
            <div className={styles['group27078']}>
              <span className={styles['text016']}>
                <span>
                  <span className='right-30 text-white'> 
                    © 2023 HOME OF VICTORY. All rights reserved / Terms of
                    Service
                  </span>
                  <br></br>
                  <span></span>
                </span>
              </span>
            </div>
          
            <span className={styles['text021']}>
              <span>
                <span>Powered By  
                  <a href='https://megaexe.com' className='no-underline text-white'> Megaexe Global</a></span>
                <br></br>
                <span></span>
                <br></br>
                <span></span>
              </span>
            </span>
          </div>
          {/* till here */}
          <div className={styles['group2009']}>
            <span className={styles['text028']}>
              <span>Contact</span>
            </span>
            <div className={styles['group2019']}>
              <span
                className={` ${styles['text030']} ${projectStyles['regular-h-regular']} `}
              >
                <span>+63 916 500 6146</span>
              </span>
              <div className={styles['frame11']}>
                <MdCall
                  // alt="antdesignphonefilled4884"
                  // src={MdCall}
                  className={styles['antdesignphonefilled']}
                />
              </div>
            </div>
            <div className={styles['frame21']}></div>
            <div className={styles['group2021']}>
              <span
                className={` ${styles['text032']} ${projectStyles['regular-h-regular']} `}
              >
                <span>
                  Orlu, Imo State, South East Nigeria, with branches worldwide.
                </span>
              </span>
              <div className={styles['frame3']}>
                <GoLocation
                  // alt="fa6solidlocationdot4884"
                  // src="/playground_assets/fa6solidlocationdot4884-mlmg.svg"
                  className={styles['fa6solidlocationdot']}
                />
              </div>
            </div>
            <div className={styles['group2020']}>
              <span
                className={` ${styles['text034']} ${projectStyles['regular-h-regular']} `}
              >
                <span>homeofvictory05@gmail.com</span>
              </span>
              <HiOutlineMail
                // alt="dashiconsemail4884"
                // src="/playground_assets/dashiconsemail4884-m3ks.svg"
                className={styles['dashiconsemail']}
              />
            </div>
          </div>
          <div className={styles['group2018']}>
            <div className={styles['group2017']}>
              <div className={styles['group88']}>
                <BsInstagram
                  // alt="instagramlogo4884"
                  // src="/playground_assets/instagramlogo4884-nnbl.svg"
                  className={styles['instagramlogo']}
                />
              </div>
              <div className={styles['group87']}>
                <AiFillLinkedin
                  // alt="linkedinlogo4884"
                  // src="/playground_assets/linkedinlogo4884-3gi.svg"
                  className={styles['linkedinlogo']}
                />
              </div>
              <div className={styles['group86']}>
                <ImTwitter
                  // alt="Twitterlogo4884"
                  // src="/playground_assets/twitterlogo4884-flwb.svg"
                  className={styles['twitterlogo']}
                />
              </div>
              <div className={styles['group85']}>
                <GrFacebook
                  // alt="facebooklogo4884"
                  // src="/playground_assets/facebooklogo4884-eg3.svg"
                  className={styles['facebooklogo']}
                />
              </div>
            </div>
            <span className={styles['text036']}>
              <span>Social media</span>
            </span>
          </div>
          <div className={styles['group27040']}>
            <span className={styles['text038']}>
              <span>Opening Hours</span>
            </span>
            <div className={styles['frame27245']}>
              <div className={styles['frame27244']}>
                <AiOutlineCalendar
                 
                  className={styles['calendar1']}
                />
                <span
                  className={` ${styles['text040']} ${projectStyles['regular-h-regular']} `}
                >
                  <span>Monday - Sunday</span>
                </span>
              </div>
              <div className={styles['frame27243']}>
                <AiOutlineCalendar
                  // alt="clock14884"
                  // src="/playground_assets/clock14884-629.svg"
                  className={styles['clock1']}
                />
                <span
                  className={` ${styles['text042']} ${projectStyles['regular-h-regular']} `}
                >
                  <span>08:00 - 16:00</span>
                </span>
              </div>
            </div>
          </div>
          <div className={styles['group27041']}>
            <span className={styles['text044']}>
              <span>Quick Links</span>
            </span>
            <div className={styles['frame27246']}>
              <span
                className={` ${styles['text046']} ${projectStyles['regular-h-regular']} `}
              >
                <span>Contact Us</span>
              </span>
              <span
                className={` ${styles['text048']} ${projectStyles['regular-h-regular']} `}
              >
                <span>Event and News</span>
              </span>
              <span
                className={` ${styles['text050']} ${projectStyles['regular-h-regular']} `}
              >
                <span>Help and Support</span>
              </span>
              <span
                className={` ${styles['text052']} ${projectStyles['regular-h-regular']} `}
              >
                <span>Privacy Statement / Data Collection</span>
              </span>
            </div>
          </div>
        </div>

        {/* end of footer */}
        <div className={styles['div']}>
          <div className={styles['div01']}>
            <AiOutlineStock
              alt="svg9214"
              src="/playground_assets/svg9214-idoh.svg"
              className={`styles['svg'] mb-10 text-white` }
            />
            <div className={styles['div02']}>
              <span className={styles['text054']}>
                <span>Experience it anywhere</span>
              </span>
              <span className={styles['text056']}>
                Browse through Devotions, Prayers, Novenas, Daily reflections,
                testimonies and bible quotes all in one place from your PC,
                mobile and Tablet.
              </span>
            </div>
            <div className={styles['frame40035']}>
              <span className={styles['text057']}>
                <span className='inline '>View Programs</span>  →
              </span>
             
            </div>
          </div>
          <div className={styles['div03']}>
            <AiOutlineStock
              alt="svg9413"
              src="/playground_assets/svg9413-owfu.svg"
              className={`styles['svg'] mb-10 text-white` }
              
            />
            <div className={styles['div04']}>
              <span className={styles['text059']}>
                <span>Make it your life</span>
              </span>
              <span className={styles['text061']}>
                <span>
                  Home of Victory connects Christians and Catholics from around
                  the world to facilitate religious discussions and support.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <div className={styles['frame40036']}>
              <span className={styles['text063']}>
                <span>Join the community </span>→
              </span>
             
            </div>
          </div>
          <div className={styles['div05']}>
            <AiOutlineStock
              
              className={`styles['svg'] mb-10 text-white` }

            />
            <div className={styles['div06']}>
              <span className={styles['text065']}>
                <span>You are not alone</span>
              </span>
              <span className={styles['text067']}>
                <span>
                  Join the community of like minded individuals, who have deep
                  affection for Jesus Christ and the Blessed Virgin Mary.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <div className={styles['frame40037']}>
              <span className={styles['text069']}>
                <span>Join the community</span> →
              </span>
              {/* <img
                alt="RightArrow29717"
                src="/playground_assets/rightarrow29717-1kr.svg"
                className={styles['right-arrow22']}
              /> */}
            </div>
          </div>
        </div>
        <span className={styles['text071']}>
          <span>
            Light at the end of the tunnel...
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <div className={styles['group27070']}>
          <div className={styles['frame18']}>
            {/* <img
              // alt="Vector1121"
              // src="/owo.png"
              className={styles['vector']}
            /> */}
          </div>
          <div className={styles['icvotd24dpgroup']}>
            {/* here */}
          </div> 
          {/* <img 
          src='/sunn.png'
          width={90}
          className='right-2'
          /> */}
          {/* side image */}
          <img
            // alt="Vector1121"
            src="/man.png"
            className={styles['vector01']}
          />
          {/* <img
          src='/starr.png'
          className='mt-100'
          /> */}
        </div>
        
        <span className={styles['text073']}>
          <span >Values</span>
        </span>
        <span className={styles['text075']}>
          <span>
            To live a life of holiness, consecration, and separation, and to
            teach with our lifestyles devoid of worldly attraction.
          </span>
        </span>
     
        <span className={styles['text077']}>
          <span>Vision Statement  </span>
        </span>
       
        <span className={styles['text079']}>
          <span>
            To populate the kingdom of God starting from the earthly realm and
            ensure fruits are geared towards repentance, redemption, and
            salvation.
          </span>
        </span>
     
        <span className={styles['text081']}>
          <span>Mission Statement  </span>
        </span>
        {/* here */}
        {/* <img
          alt="fluenttargetarrow16filled2221"
          src="/"
          className={styles['fluenttargetarrow16filled']}
        /> */}
        <span className={styles['text083']}>
          <span>
            To spread the message of the Bible to lost souls, to preach the good
            news, and spread the love of Christ.
          </span>
        </span>

        {/* here */}
        {/* <img
          // alt="Frame10000046256282"
          src="/owo.svg"
          className={styles['frame1000004625']}
        /> */}
        <div className={styles['slide1694']}>
          <div className={styles['frame40039']}>
            {/* background image */}
            <img
              // alt="Rectangle5441832"
              // src="/playground_assets/rectangle5441832-x60f-800h.png"
              className={styles['rectangle544']}
            />
            <div className={styles['group39991']}>
              <span className={styles['text085']}>
                <span>Fear Not, For i am with you</span>
              </span>
              <span className={styles['text087']}>
                <span>
                  But now, this is what the Lord says— he who created you,
                  Jacob, he who formed you, Israel: “Do not fear, for I have
                  redeemed you; I have summoned you by name; you are mine. When
                  you pass through the waters, I will be with you; and when you
                  pass through the rivers, they will not sweep over you. When
                  you walk through the fire, you will not be burned; the flames
                  will not set you ablaze. For I am the Lord your God, the Holy
                  One of Israel, your Savior; I give Egypt for your ransom, Cush
                  and Seba in your stead.
                </span>
              </span>
              <span className={styles['text089']}>
                <span>Isaiah 43:1-3</span>
              </span>
            </div>
            <img
              // alt="image911832"
              src="/prry.png"
              className={styles['image91']}
            />
          </div>
        </div>
        <div className={styles['frame40062']}>
          <span className={styles['text091']}>
            <span>
              HOME OF VICTORY introduces avenues to make people still have faith
              in God despite the challenges they are facing
            </span>
          </span>
          <span className={styles['text093']}>
            <span>Reading Plans, Devotionals and Novenas</span>
          </span>
          <div className={styles['frame40061']}>
            <div className={styles['group39987']}>
              <div className={styles['div07']}>
                <img
                  // alt="svg3821"
                  src="/pause.png"
                  className={styles['svg3']}
                />
                <div className={styles['div08']}>
                  <span className={styles['text095']}>
                    <span>LITURGICAL REFLECTIONS</span>
                  </span>
                </div>
              </div>
              <div className={styles['div09']}>
                <img
                  alt="svg3821"
                  src="/steth.png"
                  className={styles['svg4']}
                />
                <div className={styles['div10']}>
                  <span className={styles['text097']}>
                    <span>VARIOUS NOVENAS</span>
                  </span>
                </div>
              </div>
              <div className={styles['div11']}>
                <img
                  alt="svg3821"
                  src="/clo.png"
                  className={styles['svg5']}
                />
                <div className={styles['div12']}>
                  <span className={styles['text099']}>
                    <span>CHARITY OUTREACH</span>
                  </span>
                </div>
              </div>
            </div>
            <div className={styles['group39988']}>
              <div className={styles['div13']}>
                <img
                  alt="svg3821"
                  src="/bc.png"
                  className={styles['svg6']}
                />
                <div className={styles['div14']}>
                  <span className={styles['text101']}>
                    <span>
                      <span>
                        WORD OF GOD
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span>
                        CHALLENGE
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </span>
                </div>
              </div>
              <div className={styles['div15']}>
                <img
                  alt="svg3821"
                  src="/key.png"
                  className={styles['svg7']}
                />
                <div className={styles['div16']}>
                  <span className={styles['text106']}>
                    <span>PRAYERS OF THANKSGIVING</span>
                  </span>
                </div>
              </div>
              <div className={styles['div17']}>
                <img
                  alt="svg3821"
                  src="/sq.png"
                  className={styles['svg8']}
                />
                <div className={styles['div18']}>
                  <span className={styles['text108']}>
                    <span>
                      COMMUNITY TESTIMONIES
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['frame381']}>
            <span className={styles['text110']}>
              <button type='button'>Join the Community</button>
            </span>
          </div>
        </div>


        <div className={styles['group1000004610']}>
          <div className={styles['group1000004609']}>
            <div className={styles['div19']}>
              
              
              
              <div className={styles['div20']}>
                <div className={styles['a']}>
                  <div className={styles['div21']}>
                    <span className={styles['text112']}>
                      <span className='uppercase'>inspiration</span>
                    </span>
                    <span className={styles['text114']}>
                      <span>Daily Recitation of the Holy Rosary</span>
                    </span>
                  </div>
                  <div className={styles['div22']}>
                    <img
                      alt="Vectord43edfcbb0svg3767"
                      src="/dolc.png"
                      className={styles['vectord43edfcbb0svg']}
                    />
                  <div></div>

                  </div>
                  <div className={styles['div23']}>
                    <div className={styles['div24']}>
                      <div className={styles['frame40060']}>
                        <div className={styles['howlogosingle']}>
                          <img
                            alt="hand3769"
                            src="/hand.png"
                          />
                        
                        </div>
                      </div>
                    </div>
                    <div className={styles['div25']}>
                      <span className={styles['text116']}>
                        <span>Home of victory Admin</span>
                      </span>
                      <span className={styles['text118']}>
                        <span>June 10, 2021</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>



              
              <div className={styles['div26']}>
                <div className={styles['a1']}>
                  <div className={styles['div27']}>
                    <span className={styles['text120']}>
                      <span className='uppercase'>workflow</span>
                    </span>
                    <span className={styles['text122']}>
                      <span>21 Days Prayer to Mary Undoer of Knots</span>
                    </span>
                  </div>
                  <div className={styles['div28']}>
                    <img
                      alt="logo722031315fsvg3767"
                      src="/bf.png"
                      className={styles['logo722031315fsvg']}
                    />
                  </div>
                  <div className={styles['div29']}>
                    <div className={styles['div30']}>
                      <div className={styles['frame400601']}>
                        <div className={styles['howlogosingle1']}>
                          
                            <img
                              alt="Rectangle163769"
                              src="/hand.png"
                              // className={styles['rectangle161']}
                            />
                          </div>
                        </div>
                      </div>
              
                    <div className={styles['div31']}>
                      <span className={styles['text124']}>
                        <span>Home of victory Admin</span>
                      </span>
                      <span className={styles['text126']}>
                        <span>June 10, 2021</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>



              <div className={styles['div32']}>
                <div className={styles['a2']}>
                  <div className={styles['div33']}>
                    <span className={styles['text128']}>
                      <span className='uppercase'>workflow</span>
                    </span>
                    <span className={styles['text130']}>
                      <span>Breakfast with the Word</span>
                    </span>
                  </div>
                  <div className={styles['div34']}>
                    <img
                      alt="logo7b6a81fc44svg3767"
                      src="/ice.png"
                      className={styles['logo7b6a81fc44svg']}
                    />
                  </div>
                  <div className={styles['div35']}>
                    <div className={styles['div36']}>
                      <div className={styles['frame400602']}>
                        <div className={styles['howlogosingle2']}>
                        
                             
                            <img
                              alt="Rectangle163769"
                              src="/hand.png"
                              // className={styles['rectangle162']}
                            />
                          
                        </div>
                      </div>
                    </div>
                    <div className={styles['div37']}>
                      <span className={styles['text132']}>
                        <span>Home of victory Admin</span>
                      </span>
                      <span className={styles['text134']}>
                        <span>June 10, 2021</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles['div38']}>
                <div className={styles['a3']}>
                  <div className={styles['div39']}>
                    <span className={styles['text136']}>
                      <span className='uppercase'>workflow</span>
                    </span>
                    <span className={styles['text138']}>
                      <span>40 Days Lenten Journey</span>
                    </span>
                  </div>
                  <div className={styles['div40']}>
                    <img
                      alt="logoe4a96eb4c7svg3768"
                      src="/fw.png"
                      className={styles['logoe4a96eb4c7svg']}
                    />
                  </div>
                  <div className={styles['div41']}>
                    <div className={styles['div42']}>
                      <div className={styles['frame400603']}>
                        <div className={styles['howlogosingle3']}>
                         
                           
                            <img
                              alt="Rectangle163769"
                              src="/hand.png"
                              // className={styles['rectangle163']}
                            />
                          </div>
                        </div>
                     
                    </div>
                    <div className={styles['div43']}>
                      <span className={styles['text140']}>
                        <span>Home of victory Admin</span>
                      </span>
                      <span className={styles['text142']}>
                        <span>June 10, 2021</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles['div44']}>
                <div className={styles['a4']}>
                  <div className={styles['div45']}>
                    <span className={styles['text144']}>
                      <span className='uppercase'>design</span>
                    </span>
                    <span className={styles['text146']}>
                      <span>Days Program with the <br/> 
                      Holy Spirit of God</span>
                    </span>
                  </div>
                  <div className={styles['div46']}>
                    <img
                      alt="logo56717e1f8307svg3768"
                      src="/aa.png"
                      className={styles['logo56717e1f8307svg']}
                    />
                  </div>
                  <div className={styles['div47']}>
                    <div className={styles['div48']}>
                      <div className={styles['frame400604']}>
                        <div className={styles['howlogosingle4']}>
                       
                          
                            <img
                              alt="Rectangle163769"
                              src="/hand.png"
                              // className={styles['rectangle164']}
                            />
                          </div>
                  
                      </div>
                    </div>
                    <div className={styles['div49']}>
                      <span className={styles['text148']}>
                        <span>Home of victory Admin</span>
                      </span>
                      <span className={styles['text150']}>
                        <span>Product Designer at Appinio</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles['div50']}>
                <div className={styles['a5']}>
                  <div className={styles['div51']}>
                    <span className={styles['text152']}>
                      <span className='uppercase'>career</span>
                    </span>
                    <span className={styles['text154']}>
                      <span className='uppercase'>Days Pentecost Novena</span>
                    </span>
                  </div>
                  <div className={styles['div52']}>
                    <img
                      alt="layer11d66789d2e9svg3768"
                      src="/ssc.png"
                      className={styles['layer11d66789d2e9svg']}
                    />
                  </div>
                  <div className={styles['div53']}>
                    <div className={styles['div54']}>
                      <div className={styles['frame400605']}>
                        <div className={styles['howlogosingle5']}>
                        
                          
                            <img
                              alt="Rectangle163769"
                              src="/hand.png"
                              // className={styles['rectangle165']}
                            />
                     
                        </div>
                      </div>
                    </div>
                    <div className={styles['div55']}>
                      <span className={styles['text156']}>
                        <span>Home of victory Admin</span>
                      </span>
                      <span className={styles['text158']}>
                        <span>June 10, 2021</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['frame40063']}>
            <span className={styles['text160']}>
              <p className='ml-14'>
                Latest event and news
                </p>
                </span>
            <div className={styles['div56']}>
              <span className={styles['text161']}>
                <span>See all New</span>  →
              </span>
            
            </div>
          </div>
        </div>
        <img
          alt="Line26302"
          src="/playground_assets/line26302-d2mp.svg"
          className={styles['line2']}
        />
        <img
          alt="Line36302"
          src="/playground_assets/line36302-sivs.svg"
          className={styles['line3']}
        />
        {/* <img
          // alt="Rectangle43233364"
          src="/playground_assets/rectangle43233364-20jb-200h.png"
          className={styles['rectangle4323']}
        /> */}
        <div className={styles['frame40056']}>
          <div className={styles['group27065']}>
            <div className={styles['group19']}>
              <div>
      <img className="mx-7 md:mx-16 mb-4 h-12 w-auto" src='/icon1.png' width={25} height={25} alt="hand"/>
      </div>
            </div>
          </div>
          <div className={styles['frame40055']}>
            {/* search bar */}
              <div class="relative mt-2 text-center ml-7 justify-center items-center">
                     <div class="mb-3 xl:w-96">
                      <div class="relative flex pl-10 flex-row w-90  h-11 border border-solid border-neutral-300 bg-slate-200 rounded-full px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200">
                     <input
                       type="search"
                       class="relative m-0  border-slate-200  flex-auto  border border-solid  bg-slate-200 rounded-full px-3 py-1.5 text-base font-normal text- outline-none transition duration-300 ease-in-out focus:border-black  focus:text-black   dark:text-black dark:placeholder:text-black"   placeholder="Search Items..."
                       />
                     <button
                      class="relative z-[4] flex items-center  bg-primary  font-large uppercase leading-tight  bg-blue-900 text-white w-10 rounded-full border shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                      type="button"
                      data-te-ripple-init
                      data-te-ripple-color="light">
                     <CiSearch className='ml-3 rounded-full'/>
                            </button>
                   </div>
                 </div>
               </div> 
        
            <div className={styles['frame40053']}>
              <div className={styles['nextnav']}>
                <span className={styles['text165']}>
                  <a href=' '  className='no-underline'>
                  <p className='mx-20 text-slate-700 text-md font-semibold'>Events</p>
                  </a>
                </span>
              </div>
              <span className={styles['text167']}>
                <a href='' className='no-underline'>
                <p className='no-underline text-slate-700 font-semibold '>Sign In</p>
                </a>
                </span>
              <div className={styles['browsecourse1']}>
                <div className=''>
                  <span className={styles['text168']}>
                 <button type='button'  className='btn w-40 relative blue-900 mt-2.5 ml-10 btn-primary'> 
                  Join the Community
                 </button>
                  </span>
                </div>
              </div>
              <div className={styles['user']}>
                <div className={styles['frame5']}>
                  <div className={styles['group39990']}>
                    {/* <div className='pl-10'> */}

                    <CgProfile
                      // alt="Ellipse2173364"
                      src='/ava.png'
                      width={12}
                      height={12}
                      className={styles['ellipse217']}
                      />
                  </div>
                </div>
                {/* <img
                  alt="chevrondown3364"
                  src="/playground_assets/chevrondown3364-dsgq.svg"
                  className={styles['chevrondown']}
                /> */}

                <select className='w-0 right-7  relative rounded-full'>
                  <option className='w-0 rounded-full'></option>
                  <option className='w-0 rounded-full'>account details</option>
                  <option className='w-0 rounded-full'>settings</option>
                  <option className='w-0 rounded-full'>logout</option>
                  <option>rev</option>
                </select>
              </div>
                {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
