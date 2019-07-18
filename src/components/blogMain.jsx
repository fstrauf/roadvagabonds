import React from "react"
import Bio from "../components/bio"
import SideContent from "../components/sideContent"
import SEO from "../components/seo"
import theme from '../../config/theme'
import Blog from '../components/blog'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from "../components/layout"

const BlogMainWrapper = styled.div`
  height: 100%;
  background: ${theme.colors.main.light};
  display: table;
  margin-left: 3rem;
  margin-right: 3rem;
`

class BlogMain extends React.Component {
    render() {
        const { site, posts, allInsta, cats, numPage } = this.props

        return (
            <Layout title={site.title}>
                <Helmet
                    title={site.title}
                />
                <SEO title="All posts" />
                {/* <Bio /> */}
                <BlogMainWrapper>
                    <Blog cats={cats} posts={posts}  numPage={numPage} />
                    <SideContent posts={allInsta} insta={site.social.instagram} />
                </BlogMainWrapper>
            </Layout>
        )
    }
}

export default BlogMain