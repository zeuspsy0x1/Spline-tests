
import { Inter } from '@next/font/google'
import Spline from '@splinetool/react-spline';


const inter = Inter({ subsets: ['latin'] })





/* https://my.spline.design/miniroomartcopy-24e472329e163a7aa07e06b08cb6fb12/ */

export default function Home() {
  return (
    <>
        <div style={{ ["min-height" as any]: "900px" }}>
          <Spline scene="https://prod.spline.design/5jWpducZ4FxVq0Dw/scene.splinecode" />
          <Spline scene="https://prod.spline.design/AWfOPZeSlQlU30AB/scene.splinecode" />
         
          
        </div>
    </>
  )
}
