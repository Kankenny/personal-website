import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Body from '@/components/layout/body/Body'
import Connect from '@/components/layout/body/connect/Connect'
import Feature from '@/components/layout/body/feature/Feature'
import HobbySummary from './HobbySummary'
import Headline from '@/components/layout/body/headline/Headline'
import Breadcrumbs from '@/components/layout/body/breadcrumbs/Breadcrumbs'

import Factorio from '../../../public/hobbies/factorio/Factoriogif.gif'

const Hobbies = () => {
	const router = useRouter()
	const pathName = router.pathname
	return (
		<Body>
			<Breadcrumbs fullPath={pathName} />
			<Headline
				headlineTitle="What tickles my brain and gives me joy"
				description="Uncover my passions and find out what tickles my brain and gives me joy, by exploring my hobbies. See how my interests have helped me develop skills and knowledge that can be applied in my daily life."
			/>
			<Link href={`hobbies/factorio`} legacyBehavior>
				<a>
					<Feature
						img={Factorio}
						title="Factorio"
						description="I am an avid player of the game Factorio, and have a deep passion for the game's design and gameplay. The game's complexity and challenge are endlessly engaging for me, and I enjoy the satisfaction of optimizing my factory's efficiency through automation and solving bottlenecks in resources. I have applied my knowledge of software design concepts such as scalability in my gameplay, specifically in the form of building a main bus and utilizing robotics. Playing Factorio is not just a hobby for me, but a way to constantly improve my problem-solving, critical thinking, and ability to optimize and automate processes."
						featureType="Game"
					/>
				</a>
			</Link>
			<HobbySummary excludeTitle="Factorio" />
			<Connect connectWithMeText="Let's connect to explore our passions together" />
		</Body>
	)
}

export default Hobbies
