import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Components
import SectionContainer from '@/components/ui/SectionContainer'
import SectionTitle from '@/components/ui/SectionTitle'
import OverviewCard from '@/components/ui/OverviewCard'

// Utility Functions
import convertTextToUrl from '@/utils/lib/convertTextToUrl'

// Hard-coded Data
import workSummary from '@/data/WORK_SUMMARY'

type Props = {
	excludeTitle?: string
}

const sectionContainerVariant = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.3,
		},
	},
}

const Works = ({ excludeTitle }: Props) => {
	let filtered: any[] = []

	if (excludeTitle) {
		filtered = workSummary.filter((work) => work.title !== excludeTitle)
	} else {
		filtered = workSummary
	}

	return (
		<SectionContainer twClasses="py-20">
			<SectionTitle sectionTitle="My other work experiences" />
			<motion.div
				className="mx-auto grid grid-cols-1 gap-6 py-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
				variants={sectionContainerVariant}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
			>
				{filtered.map((work) => (
					<Link
						legacyBehavior
						href={`/work-experience/${convertTextToUrl(
							work.title
						)}`}
						key={work.title}
					>
						<a>
							<OverviewCard entry={work} />
						</a>
					</Link>
				))}
			</motion.div>
		</SectionContainer>
	)
}

export default Works
