import React from 'react'

import Detail from '@/components/layout/body/detail/Detail'
import DetailSection from '@/components/layout/body/detail/DetailSection'

import details from '@/data/hobbies-data/factorioData'

const FactorioDetail = () => {
	return (
		<Detail title="Factorio">
			{details.map((detail, index) => {
				return <DetailSection key={index} detail={detail} />
			})}
		</Detail>
	)
}

export default FactorioDetail
