import { Card } from '@components/Card'
import { useCard } from '@hooks/useCards'
import styles from './styles.module.scss'

export function Home() {
  const { listCards } = useCard()
  const listCardsQuery = listCards()

  return (
    <div className={styles.home__wrapper}>
      {listCardsQuery.data?.cards.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          subtitle={item.subtitle}
          description={item.description}
        />
      ))}
    </div>
  )
}
