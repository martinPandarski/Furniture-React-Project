import style from './About.module.css';
const { Fragment } = require("react");

function About(){
    return(
        <Fragment>
        <h1 className={style.aboutHeading}>About</h1>
        <img className={style.aboutLogo} src="/about-page.jpeg" alt=""/>
        <p className={style.aboutInfo}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus eveniet alias amet adipisci deleniti esse hic animi culpa cumque natus aliquid voluptatibus voluptates modi voluptas, dolorum aspernatur atque! Fugit, dicta?
        Dolores reiciendis unde fugiat nihil illo necessitatibus cum sint sapiente sunt eligendi repudiandae obcaecati assumenda eveniet quas accusantium, debitis ipsa placeat ex nostrum laudantium quibusdam architecto. Voluptates facilis iure sapiente.
        Pariatur est ab illum, illo quos veritatis accusantium, ducimus nesciunt, velit consectetur atque praesentium laudantium molestiae non odit dicta quasi delectus impedit voluptatibus quibusdam dolore dolorum amet. Neque, quisquam eligendi!
        Labore ipsum illum fugit odit. Eveniet sequi adipisci necessitatibus expedita, laborum quidem cum reiciendis quod ipsam recusandae minima ab non at harum doloribus praesentium modi nihil voluptatibus? Non, assumenda provident!
        Molestias saepe quasi soluta maxime voluptate esse eius suscipit veritatis, cumque facere nisi nobis, ad iste? Alias rem animi quis esse numquam commodi libero, ab fugiat omnis, voluptas provident et!
        Laborum blanditiis obcaecati cumque placeat architecto dolorum accusamus doloremque deserunt minus. Consectetur ex est corrupti, nihil quos iusto, delectus quam obcaecati corporis cum architecto repellat sed minus dolore necessitatibus vitae.
        Dolores animi tempore, quod temporibus earum amet? Natus dolores temporibus placeat maiores ratione dignissimos voluptatem fugit rerum earum ex minima velit molestiae obcaecati delectus, quas aliquam minus aliquid optio necessitatibus!
        Voluptatibus hic asperiores nisi sequi sed incidunt.</p>
        </Fragment>
    )
}

export default About;