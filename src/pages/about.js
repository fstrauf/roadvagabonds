import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const about = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <p>
      Hi, I’m Vicky, a German Graphic Design Freelancer living abroad in Sydney. Passionate about travel and exploring new countries and cultures. I want to share my experience with you and give you some impressions to go out and travel the world.
      Working as a Freelancer makes travelling more flexible and you can combine both. If you’re a small business, startup or just someone who needs a great design, feel free to contact me. I’m happy to work with you!
    </p>
    <Link to="/services">Work with me</Link>
  </Layout>
)

export default about
