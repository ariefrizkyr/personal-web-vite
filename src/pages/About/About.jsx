import React from 'react'
import { ToolsStack } from '../../constants'

const About = () => {
  return (
    <div className="container">
      <h1 className="font-extrabold text-4xl md:text-6xl text-gray-800 text-center">About</h1>
      <div className="flex justify-center mt-6">
        <article className="prose md:prose-lg">
            <p>
                Arief R Ramadhan is currently working as a Senior Product Manager at tiket.com. He has been working in full product development cycle from research, ideation, development, to iteration.
            </p>

            <p>
                He has huge passion for product management, user experience, and software development. He has been working both as Software Engineer and UX Designer before becoming a Product Manager.
            </p>

            <p>
                In his spare time, he loves to do programming, inline skating, running, badminton, traveling, hiking, and camping.
            </p>

            <h3 className="text-center">
                Tools
            </h3>
            
            <div className="flex justify-center md:justify-between space-x-6 flex-wrap">
                <img src={ToolsStack.JiraIcon} className="h-8 w-8" alt="Jira"></img>
                <img src={ToolsStack.ConfluenceIcon} className="h-8 w-8" alt="Confluence"></img>
                <img src={ToolsStack.GoogleAnalyticsIcon} className="h-8 w-8" alt="Google Analytics"></img>
                <img src={ToolsStack.Amplitude} className="h-8 w-8" alt="Amplitude"></img>
                <img src={ToolsStack.GoogleTagManagerIcon} className="h-8 w-8" alt="Google Tag Manager"></img>
                <img src={ToolsStack.GoogleOptimizeIcon} className="h-8 w-8" alt="Google Optimize"></img>
                <img src={ToolsStack.FigmaIcon} className="h-8 w-8" alt="Figma"></img>
                <img src={ToolsStack.VisualStudioCodeIcon} className="h-8 w-8" alt="Visual Studio Code"></img>
                <img src={ToolsStack.PostmanIcon} className="h-8 w-8" alt="Postman"></img>
                <img src={ToolsStack.MetabaseIcon} className="h-8 w-8" alt="Metabase"></img>
                <img src={ToolsStack.BigQuery} className="h-8 w-8" alt="BigQuery"></img>
            </div>
            
            <h3 className="text-center">
                Technology Stack
            </h3>

            <div className="flex justify-center md:justify-between space-x-6 flex-wrap">
                <img src={ToolsStack.HTMLIcon} className="h-8 w-8" alt="HTML"></img>
                <img src={ToolsStack.CSSIcon} className="h-8 w-8" alt="CSS"></img>
                <img src={ToolsStack.JavascriptIcon} className="h-8 w-8" alt="Javascript"></img>
                <img src={ToolsStack.AngularIcon} className="h-8 w-8" alt="Angular"></img>
                <img src={ToolsStack.ReactIcon} className="h-8 w-8" alt="React"></img>
                <img src={ToolsStack.RoRIcon} className="h-8 w-8" alt="Ruby on Rails"></img>
                <img src={ToolsStack.PostgreSQLIcon} className="h-8 w-8" alt="PostgreSQL"></img>
                <img src={ToolsStack.MagentoIcon} className="h-8 w-8" alt="Magento"></img>
                <img src={ToolsStack.WordPressIcon} className="h-8 w-8" alt="WordPress"></img>
            </div>
        </article>
      </div>
    </div>
  )
}

export default About