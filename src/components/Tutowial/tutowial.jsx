import './tutowial.css'

export default function Tutowial() {
    const dir = `public/
       index.html
       main.js
       preload.js

src/
    App.js
    index.js
    index.css
    components/
               Hewwo/
                     hewwo.jsx
                     hewwo.css

               Tutowial/
                        tutowial.jsx
                        tutowial.css`
    return (
        <pre dangerouslySetInnerHTML={{__html: dir}} id='structure'/>
    )
}