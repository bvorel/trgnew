import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <>
      <footer id="footer" className="bg-black text-white" data-scroll-section>
        <div className="container mx-auto px-5 relative" data-scroll>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-4 py-5 md:py-20 mr-0 md:mr-20">
              <ul className="text-3xl font-extrabold text-center md:text-left">
                <li className="block">Work</li>
                <li className="block">Capabilities</li>
                <li className="block">Careers</li>
                <li className="block">Culture</li>
                <li className="block">Contact</li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-4 py-5 md:py-20 text-center md:text-left">
              <p>2801 North Central Expy.</p>
              <p>Suite 100</p>
              <p>Dallas, Texas 75208</p>
              <div className="h-5"></div>
              <p>hello@richards.com</p>
              <p>214.891.5700</p>
            </div>
            <div className="footer-logo col-span-12 md:col-span-4 py-5 md:py-20 flex justify-center md:justify-end">
              <img className="self-center md:self-start" src="/images/logo_footer.svg" alt="TRG Logo"/>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 lg:gap-4 grid-cols-1 gap-0 py-10">
            <div className="col-span-12 md:col-span-6">
              <p className="text-center lg:text-left text-[18px]">© 2021 The Richards Group - All Rights Reserved</p>
            </div>
            <div className="col-span-12 md:col-span-3 text-center">
              <p className="text-center lg:text-left text-[18px]">Privacy Policy     Legal</p>
            </div>
            <div className="col-span-12 md:col-span-3 text-center text-[18px]">
              <p>Powered by The Richards Group</p>
            </div>
          </div>
        </div>
      </footer>
      <section className="h-10"></section>
    </>
  )
}
