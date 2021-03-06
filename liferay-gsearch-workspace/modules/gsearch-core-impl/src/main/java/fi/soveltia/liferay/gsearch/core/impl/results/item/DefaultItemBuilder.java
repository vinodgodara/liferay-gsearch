
package fi.soveltia.liferay.gsearch.core.impl.results.item;

import com.liferay.portal.search.document.Document;

import fi.soveltia.liferay.gsearch.core.api.results.item.ResultItemBuilder;

/**
 * Default item builder.
 *
 * @author Petteri Karttunen
 */
public class DefaultItemBuilder
	extends BaseResultItemBuilder implements ResultItemBuilder {

	/**
	 * {@inheritDoc}
	 */
	@Override
	public boolean canBuild(Document document) {
		return true;
	}

}