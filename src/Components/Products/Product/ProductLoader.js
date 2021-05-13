import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={400}
        height={460}
        viewBox="0 0 400 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="2" y="83" rx="2" ry="2" width="132" height="19" />
        <rect x="2" y="110" rx="2" ry="2" width="203" height="21" />
        <rect x="2" y="138" rx="2" ry="2" width="320" height="265" />
        <rect x="280" y="80" rx="0" ry="0" width="40" height="20" />
        <circle cx="16" cy="428" r="12" />
        <circle cx="49" cy="427" r="12" />
        <circle cx="82" cy="427" r="11" />
        <rect x="202" y="417" rx="0" ry="0" width="119" height="23" />
    </ContentLoader>
)

export default MyLoader