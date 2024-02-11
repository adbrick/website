import { Page } from "@aaronellington/standard-ui";
import Image from "next/image";
import styles from "./page.module.scss";

export default function PageComponent() {
	return (
		<Page>
			<article className={styles.main}>
				<p className={styles.browserIcons}>
					<a
						target="_blank"
						href="https://chromewebstore.google.com/detail/adbrick/lceleahfonekbbkkmfoefkldfedghjgl"
						rel="noreferrer"
					>
						<Image
							src="/images/browser-icons/chrome.webp"
							alt="Chrome Download"
							width={334}
							height={128}
						/>
					</a>
					<a
						target="_blank"
						href="https://addons.mozilla.org/en-US/firefox/addon/adbrick"
						rel="noreferrer"
					>
						<Image
							src="/images/browser-icons/firefox.webp"
							alt="Firefox Download"
							width={334}
							height={128}
						/>
					</a>
					<a
						target="_blank"
						href="https://apps.apple.com/us/app/adbrick/id6474696501"
						rel="noreferrer"
					>
						<Image
							src="/images/browser-icons/safari.webp"
							alt="Safari Download"
							width={334}
							height={128}
						/>
					</a>
					<a href="/" className={styles.disabled} rel="noreferrer">
						<Image
							src="/images/browser-icons/microsoft.webp"
							alt="Edge Download"
							width={334}
							height={128}
						/>
					</a>
					<a href="/" className={styles.disabled} rel="noreferrer">
						<Image
							src="/images/browser-icons/opera.webp"
							alt="Opera Download"
							width={334}
							height={128}
						/>
					</a>
				</p>
			</article>
		</Page>
	);
}
