import { Page } from '@aaronellington/standard-ui'
import styles from './page.module.scss'
import Image from 'next/image'

export default function PageComponent() {
	return (
		<Page>
			<article className={styles.main}>
				<p className={styles.browserIcons}>
					<a
						target="_blank"
						href="https://chromewebstore.google.com/detail/adbrick/lceleahfonekbbkkmfoefkldfedghjgl"
					>
						<Image
							src="/images/browser-icons/chrome.webp"
							alt=""
							width={334}
							height={128}
						/>
					</a>
					<a
						target="_blank"
						href="https://addons.mozilla.org/en-US/firefox/addon/adbrick"
					>
						<Image
							src="/images/browser-icons/firefox.webp"
							alt=""
							width={334}
							height={128}
						/>
					</a>
					<a
						target="_blank"
						href="https://apps.apple.com/us/app/adbrick/id6474696501"
					>
						<Image
							src="/images/browser-icons/safari-macos.webp"
							alt=""
							width={334}
							height={128}
						/>
					</a>
					<a target="_blank" href="" className={styles.disabled}>
						<Image
							src="/images/browser-icons/safari-ios.webp"
							alt=""
							width={334}
							height={128}
						/>
					</a>
					<a target="_blank" href="#" className={styles.disabled}>
						<Image
							src="/images/browser-icons/microsoft.webp"
							alt=""
							width={334}
							height={128}
						/>
					</a>
					<a target="_blank" href="#" className={styles.disabled}>
						<Image
							src="/images/browser-icons/opera.webp"
							alt=""
							width={334}
							height={128}
						/>
					</a>
				</p>
			</article>
		</Page>
	)
}
