import { Page } from "@aaronellington/standard-ui";
import styles from "./page.module.scss";

export default function PageComponent() {
	return (
		<Page>
			<article className={styles.main}>
				<h1>Privacy Policy</h1>
				<p>AdBrick does not collect any data of any kind.</p>
			</article>
		</Page>
	);
}
