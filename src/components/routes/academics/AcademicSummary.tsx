import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Components
import OverviewCard from '@/components/ui/OverviewCard'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionTitle from '@/components/ui/SectionTitle'

// Utility Functions
import convertTextToUrl from '@/utils/lib/convertTextToUrl'

// Hard-coded Data
import academicSummary from '@/data/ACADEMIC_SUMMARY'

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

const AcademicSummary = ({ excludeTitle }: Props) => {
	let filtered: any[] = []

	if (excludeTitle) {
		filtered = academicSummary.filter(
			(academic) => academic.title !== excludeTitle
		)
	} else {
		filtered = academicSummary
	}

	return (
		<SectionContainer twClasses="py-20">
			<SectionTitle sectionTitle="Other academic achievements" />

			<motion.div
				className="mx-auto grid grid-cols-1 gap-6 py-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
				variants={sectionContainerVariant}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
			>
				{filtered.map((academic) => (
					<Link
						legacyBehavior
						href={`/academics/${convertTextToUrl(
							academic.title
						)}`}
						key={academic.title}
					>
						<a>
							<OverviewCard entry={academic} />
						</a>
					</Link>
				))}
			</motion.div>
		</SectionContainer>
	)
}

export default AcademicSummary
