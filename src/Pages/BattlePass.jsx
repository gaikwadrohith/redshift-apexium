import BattleHero from "../components/battlepass/BattleHero"
import StatsBar from "../components/battlepass/StatsBar"
import FeaturedRewards from "../components/battlepass/FeaturedRewards"
import ProgressTracker from "../components/battlepass/ProgressTracker"
import BattleCTA from "../components/battlepass/BattleCTA"

const BattlePass = () => {
  return (
    <>
      <BattleHero />
      <StatsBar />
      <FeaturedRewards />
      <ProgressTracker />
      <BattleCTA />
    </>
  )
}

export default BattlePass