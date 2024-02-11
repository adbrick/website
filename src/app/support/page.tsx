import { Page } from "@aaronellington/standard-ui";
import styles from "./page.module.scss";

export default function PageComponent() {
	return (
		<Page>
			<article className={styles.main}>
				<h1>Product Support</h1>
				<p>There are 2 main ways to get support:</p>
				<ol>
					<li>
						Submit a{" "}
						<a href="https://github.com/adbrick/extension/issues/new">
							GitHub Issue
						</a>
					</li>
					<li>
						Email Us here:{" "}
						<a href="mailto:contact@adbrick.org?subject=Product Support Request">
							contact@adbrick.org
						</a>
					</li>
				</ol>
			</article>
		</Page>
	);
}
