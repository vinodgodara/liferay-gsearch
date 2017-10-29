import core from 'metal/src/core';
import State from 'metal-state/src/State';
import Soy from 'metal-soy/src/Soy';
import Ajax from 'metal-ajax/src/Ajax';
import MultiMap from 'metal-multimap/src/MultiMap';

/**
 * GSearch Query class
 */
class GSearchQuery extends State {

	/**
	 * Build url string for the browser address bar.
	 */
	buildAddressBarURL() {
		
		let url = [location.protocol, '//', location.host, location.pathname].join('');		

		url = url
			.concat('?q=')
			.concat(this.getKeywords())
			.concat('&scope=').concat(this.getScopeFilter())
			.concat('&time=').concat(this.getTimeFilter())
			.concat('&type=').concat(this.getTypeFilter())
			.concat('&start=').concat(this.getStart())
			.concat('&sortField=').concat(this.getSortField())
			.concat('&sortDirection=').concat(this.getSortDirection());
		
		if(this.getDocumentExtensionFilter() != '') {
			url = url.concat('&extension=').concat(this.getDocumentExtensionFilter())
		}

		if(this.getDocumentTypeFilter() != '') {
			url = url.concat('&filetype=').concat(this.getDocumentTypeFilter())
		}

		if(this.getWebContentStructureFilter() != '') {
			url = url.concat('&wcs=').concat(this.getWebContentStructureFilter())
		}
		
		return encodeURI(url);
	}
	
	/**
	 * Build query params
	 */
	buildQueryParams() {
		let params = new MultiMap();
		params.add('q', this.getKeywords());
		params.add('scope', this.getScopeFilter());
		params.add('time', this.getTimeFilter());
		params.add('type', this.getTypeFilter());
		params.add('start', this.getStart());
		params.add('sortField', this.getSortField());
		params.add('sortDirection', this.getSortDirection());
		
		if(this.getDocumentExtensionFilter() != '') {
			params.add('extension', this.getDocumentExtensionFilter());
		}

		if(this.getDocumentTypeFilter() != '') {
			params.add('filetype', this.getDocumentTypeFilter());
		}

		if(this.getWebContentStructureFilter() != '') {
			params.add('wcs', this.getWebContentStructureFilter());
		}
		
		return params;
	}

	getStart()  {
    	return this.start;
    }
   
    setStart(start) {
    	this.start = start;
    }

	getSortField()  {
    	return this.sortField;
    }
   
    setSortField(sortField) {
    	this.sortField = sortField;
    }

    getSortDirection()  {
    	return this.sortDirection;
    }
   
    setSortDirection(sortDirection) {
    	this.sortDirection = sortDirection;
    }
    
    getKeywords()  {
    	return this.keywords;
    }
    
	setKeywords(keywords)  {
    	this.keywords = keywords;
    }

	getQueryMinLength() {
		return this.queryMinLength;
	}

	setQueryMinLength(queryMinLength) {
		this.queryMinLength = queryMinLength;
	}

    getDocumentExtensionFilter()  {
    	return this.documentExtensionFilter;
    }
    
    setDocumentExtensionFilter(documentExtensionFilter)  {
		this.documentExtensionFilter = documentExtensionFilter;
    }
    
    getDocumentTypeFilter()  {
    	return this.documentTypeFilter;
    }
    
    setDocumentTypeFilter(documentTypeFilter)  {
		this.documentTypeFilter = documentTypeFilter;
    }
    
    getScopeFilter()  {
    	return this.scopeFilter;
    }
    
    setScopeFilter(scopeFilter)  {
		this.scopeFilter = scopeFilter;
    }
    
    getTimeFilter()  {
    	return this.timeFilter;
    }
    
    setTimeFilter(timeFilter) {
    	this.timeFilter = timeFilter;
	}
    
    getTypeFilter()  {
    	return this.typeFilter;
    }
	
	setTypeFilter(typeFilter) {
		this.typeFilter = typeFilter;
	}
	
    getWebContentStructureFilter()  {
    	return this.webContentStructureFilter;
    }
    
    setWebContentStructureFilter(webContentStructureFilter)  {
		this.webContentStructureFilter = webContentStructureFilter;
    }
    	
	validate() {
		if (this.keywords.length < this.getQueryMinLength()) {
			return false;
		}
		return true;
	}

	toString() {
		return JSON.stringify(this.values);
	}
}

/** 
 * State definition.
 * 
 * @type {!Object}
 * @static
 */
GSearchQuery.STATE = {
	start: {
		value: 0
	},
	sortField: {
		value: 'score'
	},
	sortDirection: {
		value: 'asc'
	},
	keywords: {
		value: ''
	},
	queryMinLength: {
		value: 3
	},
	documentExtensionFilter: {
		value: ''
	},
	documentTypeFilter: {
		value: ''
	},
	scopeFilter: {
		value: 'all'
	},
	timeFilter: {
		value: ''
	},
	typeFilter: {
		value: ''
	},
	webContentStructureFilter: {
		value: ''
	}
}

export default GSearchQuery;
