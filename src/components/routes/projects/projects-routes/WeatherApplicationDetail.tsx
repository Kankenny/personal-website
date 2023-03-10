import React from 'react'

import Detail from '@/components/layout/body/detail/Detail'
import DetailSection from '@/components/layout/body/detail/DetailSection'

import details from '@/data/projects-data/weatherApplicationData'

const WeatherApplicationDetail = () => {
	return (
		<Detail
			title="Weather Application"
			sourceCode="https://github.com/Kankenny/weather-app"
		>
			{details.map((detail, index) => {
				return <DetailSection key={index} detail={detail} />
			})}
		</Detail>
	)
}

export default WeatherApplicationDetail
