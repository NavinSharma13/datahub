"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9106],{4137:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(a),c=i,g=m["".concat(d,".").concat(c)]||m[c]||u[c]||r;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1818:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var n=a(7462),i=a(3366),r=(a(7294),a(4137)),l=["components"],o={title:"BigQuery",sidebar_label:"BigQuery",slug:"/metadata-ingestion/source_docs/bigquery",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/bigquery.md"},d="BigQuery",s={unversionedId:"metadata-ingestion/source_docs/bigquery",id:"metadata-ingestion/source_docs/bigquery",isDocsHomePage:!1,title:"BigQuery",description:"For context on getting started with ingestion, check out our metadata ingestion guide.",source:"@site/genDocs/metadata-ingestion/source_docs/bigquery.md",sourceDirName:"metadata-ingestion/source_docs",slug:"/metadata-ingestion/source_docs/bigquery",permalink:"/docs/metadata-ingestion/source_docs/bigquery",editUrl:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/bigquery.md",tags:[],version:"current",frontMatter:{title:"BigQuery",sidebar_label:"BigQuery",slug:"/metadata-ingestion/source_docs/bigquery",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/bigquery.md"},sidebar:"overviewSidebar",previous:{title:"Azure AD",permalink:"/docs/metadata-ingestion/source_docs/azure-ad"},next:{title:"Business Glossary",permalink:"/docs/metadata-ingestion/source_docs/business_glossary"}},p=[{value:"Setup",id:"setup",children:[],level:2},{value:"Prerequisites",id:"prerequisites",children:[{value:"Create a datahub profile in GCP:",id:"create-a-datahub-profile-in-gcp",children:[],level:3},{value:"Create a service account:",id:"create-a-service-account",children:[],level:3}],level:2},{value:"Capabilities",id:"capabilities",children:[],level:2},{value:"Quickstart recipe",id:"quickstart-recipe",children:[],level:2},{value:"Config details",id:"config-details",children:[],level:2},{value:"Compatibility",id:"compatibility",children:[],level:2},{value:"Setup",id:"setup-1",children:[{value:"Prerequisites",id:"prerequisites-1",children:[],level:3}],level:2},{value:"Capabilities",id:"capabilities-1",children:[],level:2},{value:"Quickstart recipe",id:"quickstart-recipe-1",children:[],level:2},{value:"Config details",id:"config-details-1",children:[],level:2},{value:"Compatibility",id:"compatibility-1",children:[],level:2},{value:"Questions",id:"questions",children:[],level:2}],u={toc:p};function m(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bigquery"},"BigQuery"),(0,r.kt)("p",null,"For context on getting started with ingestion, check out our ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion"},"metadata ingestion guide"),"."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"To install this plugin, run ",(0,r.kt)("inlineCode",{parentName:"p"},"pip install 'acryl-datahub[bigquery]'"),"."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"create-a-datahub-profile-in-gcp"},"Create a datahub profile in GCP:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a custom role for datahub (",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/iam/docs/creating-custom-roles#creating_a_custom_role"},"https://cloud.google.com/iam/docs/creating-custom-roles#creating_a_custom_role"),")"),(0,r.kt)("li",{parentName:"ol"},"Grant the following permissions to this role:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"   bigquery.datasets.get\n   bigquery.datasets.getIamPolicy\n   bigquery.jobs.create\n   bigquery.jobs.list\n   bigquery.jobs.listAll\n   bigquery.models.getMetadata\n   bigquery.models.list\n   bigquery.routines.get\n   bigquery.routines.list\n   bigquery.tables.create # Needs for profiling\n   bigquery.tables.get\n   bigquery.tables.getData # Needs for profiling\n   bigquery.tables.list\n   logging.logEntries.list # Needs for lineage generation\n   resourcemanager.projects.get\n")),(0,r.kt)("h3",{id:"create-a-service-account"},"Create a service account:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Setup a ServiceAccount (",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/iam/docs/creating-managing-service-accounts#iam-service-accounts-create-console"},"https://cloud.google.com/iam/docs/creating-managing-service-accounts#iam-service-accounts-create-console"),")\nand assign the previously created role to this service account."),(0,r.kt)("li",{parentName:"ol"},"Download a service account JSON keyfile.\nExample credential file:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "service_account",\n  "project_id": "project-id-1234567",\n  "private_key_id": "d0121d0000882411234e11166c6aaa23ed5d74e0",\n  "private_key": "-----BEGIN PRIVATE KEY-----\\nMIIyourkey\\n-----END PRIVATE KEY-----",\n  "client_email": "test@suppproject-id-1234567.iam.gserviceaccount.com",\n  "client_id": "113545814931671546333",\n  "auth_uri": "https://accounts.google.com/o/oauth2/auth",\n  "token_uri": "https://oauth2.googleapis.com/token",\n  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",\n  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/test%suppproject-id-1234567.iam.gserviceaccount.com"\n}\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'To provide credentials to the source, you can either:\nSet an environment variable:\n$ export GOOGLE_APPLICATION_CREDENTIALS="/path/to/keyfile.json"'),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"or")),(0,r.kt)("p",{parentName:"li"},"Set credential config in your source based on the credential json file. For example: "))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'     credential:\n       project_id: project-id-1234567\n       private_key_id: "d0121d0000882411234e11166c6aaa23ed5d74e0"\n       private_key: "-----BEGIN PRIVATE KEY-----\\nMIIyourkey\\n-----END PRIVATE KEY-----\\n"\n       client_email: "test@suppproject-id-1234567.iam.gserviceaccount.com"\n       client_id: "123456678890"\n')),(0,r.kt)("h2",{id:"capabilities"},"Capabilities"),(0,r.kt)("p",null,"This plugin extracts the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Metadata for databases, schemas, and tables"),(0,r.kt)("li",{parentName:"ul"},"Column types associated with each table"),(0,r.kt)("li",{parentName:"ul"},"Table, row, and column statistics via optional ",(0,r.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/source_docs/sql_profiles"},"SQL profiling")),(0,r.kt)("li",{parentName:"ul"},"Table level lineage.")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can also get fine-grained usage statistics for BigQuery using the ",(0,r.kt)("inlineCode",{parentName:"p"},"bigquery-usage")," source described below."))),(0,r.kt)("h2",{id:"quickstart-recipe"},"Quickstart recipe"),(0,r.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,r.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,r.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"source:\n  type: bigquery\n  config:\n    # Coordinates\n    project_id: my_project_id\n\nsink:\n  # sink configs\n")),(0,r.kt)("h2",{id:"config-details"},"Config details"),(0,r.kt)("p",null,"Note that a ",(0,r.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,r.kt)("p",null,"As a SQL-based service, the Athena integration is also supported by our SQL profiler. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/source_docs/sql_profiles"},"here")," for more details on configuration."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"project_id")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Autodetected"),(0,r.kt)("td",{parentName:"tr",align:null},"Project ID to ingest from. If not specified, will infer from environment.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"PROD"')),(0,r.kt)("td",{parentName:"tr",align:null},"Environment to use in namespace when constructing URNs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"credential.project_id")),(0,r.kt)("td",{parentName:"tr",align:null},"Required if GOOGLE_APPLICATION_CREDENTIALS enviroment variable is not set"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"credential.private_key_id")),(0,r.kt)("td",{parentName:"tr",align:null},"Required if GOOGLE_APPLICATION_CREDENTIALS enviroment variable is not set"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Any options specified here will be passed to SQLAlchemy's ",(0,r.kt)("inlineCode",{parentName:"td"},"create_engine")," as kwargs.",(0,r.kt)("br",null),"See ",(0,r.kt)("a",{parentName:"td",href:"https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine"},"https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine")," for details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"credential.private_key")),(0,r.kt)("td",{parentName:"tr",align:null},"Required if GOOGLE_APPLICATION_CREDENTIALS enviroment variable is not set"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Any options specified here will be passed to SQLAlchemy's ",(0,r.kt)("inlineCode",{parentName:"td"},"create_engine")," as kwargs.",(0,r.kt)("br",null),"See ",(0,r.kt)("a",{parentName:"td",href:"https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine"},"https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine")," for details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"credential.client_email")),(0,r.kt)("td",{parentName:"tr",align:null},"Required if GOOGLE_APPLICATION_CREDENTIALS enviroment variable is not set"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Any options specified here will be passed to SQLAlchemy's ",(0,r.kt)("inlineCode",{parentName:"td"},"create_engine")," as kwargs.",(0,r.kt)("br",null),"See ",(0,r.kt)("a",{parentName:"td",href:"https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine"},"https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine")," for details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"credential.client_id")),(0,r.kt)("td",{parentName:"tr",align:null},"Required if GOOGLE_APPLICATION_CREDENTIALS enviroment variable is not set"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Any options specified here will be passed to SQLAlchemy's ",(0,r.kt)("inlineCode",{parentName:"td"},"create_engine")," as kwargs.",(0,r.kt)("br",null),"See ",(0,r.kt)("a",{parentName:"td",href:"https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine"},"https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine")," for details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"table_pattern.allow")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns for tables to include in ingestion.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"table_pattern.deny")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns for tables to exclude from ingestion.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"table_pattern.ignoreCase")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"schema_pattern.allow")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns for schemas to include in ingestion.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"schema_pattern.deny")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns for schemas to exclude from ingestion.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"schema_pattern.ignoreCase")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"view_pattern.allow")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns for views to include in ingestion.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"view_pattern.deny")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns for views to exclude from ingestion.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"view_pattern.ignoreCase")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"include_tables")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether tables should be ingested.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"include_views")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether views should be ingested.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"include_table_lineage")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether table level lineage should be ingested and processed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"max_query_duration")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"15")),(0,r.kt)("td",{parentName:"tr",align:null},"A time buffer in minutes to adjust start_time and end_time while querying Bigquery audit logs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"start_time")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Start of last full day in UTC (or hour, depending on ",(0,r.kt)("inlineCode",{parentName:"td"},"bucket_duration"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"Earliest time of lineage data to consider.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"end_time")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"End of last full day in UTC (or hour, depending on ",(0,r.kt)("inlineCode",{parentName:"td"},"bucket_duration"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"Latest time of lineage data to consider.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"extra_client_options")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Additional options to pass to ",(0,r.kt)("inlineCode",{parentName:"td"},"google.cloud.logging_v2.client.Client"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"use_exported_bigquery_audit_metadata")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:null},"When configured, use ",(0,r.kt)("inlineCode",{parentName:"td"},"BigQueryAuditMetadata")," in ",(0,r.kt)("inlineCode",{parentName:"td"},"bigquery_audit_metadata_datasets")," to compute lineage information.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"use_date_sharded_audit_log_tables")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to read date sharded tables or time partitioned tables when extracting lineage from exported audit logs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bigquery_audit_metadata_datasets")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"A list of datasets that contain a table named ",(0,r.kt)("inlineCode",{parentName:"td"},"cloudaudit_googleapis_com_data_access")," which contain BigQuery audit logs, specifically, those containing ",(0,r.kt)("inlineCode",{parentName:"td"},"BigQueryAuditMetadata"),". It is recommended that the project of the dataset is also specified, for example, ",(0,r.kt)("inlineCode",{parentName:"td"},"projectA.datasetB"),".")))),(0,r.kt)("p",null,"The following parameters are only relevant if include_table_lineage is set to true:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"max_query_duration "),(0,r.kt)("li",{parentName:"ul"},"start_time "),(0,r.kt)("li",{parentName:"ul"},"end_time "),(0,r.kt)("li",{parentName:"ul"},"extra_client_options")),(0,r.kt)("p",null,"When use_exported_bigquery_audit_metadata is set to true, lineage information will be computed using exported bigquery logs. On how to setup exported bigquery audit logs, refer to the following ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/reference/auditlogs#defining_a_bigquery_log_sink_using_gcloud"},"docs"),' on BigQuery audit logs. Note that only protoPayloads with "type.googleapis.com/google.cloud.audit.BigQueryAuditMetadata" are supported by the current ingestion version. The bigquery_audit_metadata_datasets parameter will be used only if use_exported_bigquery_audit_metadata is set to true.'),(0,r.kt)("p",null,"Note: the bigquery_audit_metadata_datasets parameter receives a list of datasets, in the format $PROJECT.$DATASET. This way queries from a multiple number of projects can be used to compute lineage information."),(0,r.kt)("p",null,"Note: Since bigquery source also supports dataset level lineage, the auth client will require additional permissions to be able to access the google audit logs. Refer the permissions section in bigquery-usage section below which also accesses the audit logs."),(0,r.kt)("h2",{id:"compatibility"},"Compatibility"),(0,r.kt)("p",null,"Coming soon!"),(0,r.kt)("h1",{id:"bigquery-usage-stats"},"BigQuery Usage Stats"),(0,r.kt)("p",null,"For context on getting started with ingestion, check out our ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion"},"metadata ingestion guide"),"."),(0,r.kt)("h2",{id:"setup-1"},"Setup"),(0,r.kt)("p",null,"To install this plugin, run ",(0,r.kt)("inlineCode",{parentName:"p"},"pip install 'acryl-datahub[bigquery-usage]'"),"."),(0,r.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,r.kt)("p",null,"The Google Identity must have one of the following OAuth scopes granted to it: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.googleapis.com/auth/logging.read"},"https://www.googleapis.com/auth/logging.read")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.googleapis.com/auth/logging.admin"},"https://www.googleapis.com/auth/logging.admin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.googleapis.com/auth/cloud-platform.read-only"},"https://www.googleapis.com/auth/cloud-platform.read-only")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.googleapis.com/auth/cloud-platform"},"https://www.googleapis.com/auth/cloud-platform"))),(0,r.kt)("p",null,"And should be authorized on all projects you'd like to ingest usage stats from. "),(0,r.kt)("h2",{id:"capabilities-1"},"Capabilities"),(0,r.kt)("p",null,"This plugin extracts the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Statistics on queries issued and tables and columns accessed (excludes views)"),(0,r.kt)("li",{parentName:"ul"},"Aggregation of these statistics into buckets, by day or hour granularity")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"This source only does usage statistics. To get the tables, views, and schemas in your BigQuery project, use the ",(0,r.kt)("inlineCode",{parentName:"li"},"bigquery")," source described above."),(0,r.kt)("li",{parentName:"ol"},"Depending on the compliance policies setup for the bigquery instance, sometimes logging.read permission is not sufficient. In that case, use either admin or private log viewer permission. ")))),(0,r.kt)("h2",{id:"quickstart-recipe-1"},"Quickstart recipe"),(0,r.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,r.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,r.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"source:\n  type: bigquery-usage\n  config:\n    # Coordinates\n    projects:\n      - project_id_1\n      - project_id_2\n\n    # Options\n    top_n_queries: 10\n\nsink:\n  # sink configs\n")),(0,r.kt)("h2",{id:"config-details-1"},"Config details"),(0,r.kt)("p",null,"Note that a ",(0,r.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,r.kt)("p",null,"By default, we extract usage stats for the last day, with the recommendation that this source is executed every day."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"projects")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"extra_client_options")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"PROD"')),(0,r.kt)("td",{parentName:"tr",align:null},"Environment to use in namespace when constructing URNs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"start_time")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Last full day in UTC (or hour, depending on ",(0,r.kt)("inlineCode",{parentName:"td"},"bucket_duration"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"Earliest date of usage logs to consider.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"end_time")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Last full day in UTC (or hour, depending on ",(0,r.kt)("inlineCode",{parentName:"td"},"bucket_duration"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"Latest date of usage logs to consider.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"top_n_queries")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"10")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of top queries to save to each table.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"include_operational_stats")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to display operational stats.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"extra_client_options")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Additional options to pass to ",(0,r.kt)("inlineCode",{parentName:"td"},"google.cloud.logging_v2.client.Client"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"query_log_delay")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"To account for the possibility that the query event arrives after the read event in the audit logs, we wait for at least ",(0,r.kt)("inlineCode",{parentName:"td"},"query_log_delay")," additional events to be processed before attempting to resolve BigQuery job information from the logs. If ",(0,r.kt)("inlineCode",{parentName:"td"},"query_log_delay")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"None"),", it gets treated as an unlimited delay, which prioritizes correctness at the expense of memory usage.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"max_query_duration")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"15")),(0,r.kt)("td",{parentName:"tr",align:null},"Correction to pad ",(0,r.kt)("inlineCode",{parentName:"td"},"start_time")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"end_time")," with. For handling the case where the read happens within our time range but the query completion event is delayed and happens after the configured end time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"table_pattern.allow")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns for tables to include in ingestion.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"table_pattern.deny")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns for tables to exclude in ingestion.")))),(0,r.kt)("h2",{id:"compatibility-1"},"Compatibility"),(0,r.kt)("p",null,"The source was last most recently confirmed compatible with the ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/release-notes#December_16_2021"},"December 16, 2021"),"\nrelease of BigQuery. "),(0,r.kt)("h2",{id:"questions"},"Questions"),(0,r.kt)("p",null,"If you've got any questions on configuring this source, feel free to ping us on ",(0,r.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io/"},"our Slack"),"!"))}m.isMDXComponent=!0}}]);