﻿window.myapp=msls.application,function(n){function a(n){t.call(this,n)}function e(n){t.call(this,n)}function o(n){t.call(this,n)}function s(n){t.call(this,n)}function v(n){t.call(this,n)}function f(n){t.call(this,n)}function h(n){t.call(this,n)}function c(n){t.call(this,n)}function y(n){t.call(this,n)}function p(n){t.call(this,n)}function w(n){t.call(this,n)}function l(n){t.call(this,n)}function b(n){t.call(this,n)}function k(n){d.call(this,n)}function it(){g.call(this)}var t=msls.Entity,d=msls.DataService,g=msls.DataWorkspace,i=msls._defineEntity,nt=msls._defineDataService,tt=msls._defineDataWorkspace,r=msls.DataServiceQuery,u=msls._toODataString;msls._addToNamespace("msls.application",{AssetComment:i(a,[{name:"Id",type:Number},{name:"CommentDate",type:Date},{name:"Comment",type:String},{name:"Asset",kind:"reference",type:f},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),AssetMaintenanceActivity:i(e,[{name:"Id",type:Number},{name:"DateDue",type:Date},{name:"DateCompleted",type:Date},{name:"Outcome",type:String},{name:"Asset",kind:"reference",type:f},{name:"AssetMaintenanceType",kind:"reference",type:s},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),AssetMaintenanceSchedule:i(o,[{name:"Id",type:Number},{name:"MaintenanceTypeIntervalInMonths",type:Number},{name:"Asset",kind:"reference",type:f},{name:"AssetMaintenanceType",kind:"reference",type:s},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),AssetMaintenanceType:i(s,[{name:"Id",type:Number},{name:"MaintenanceTypeDescription",type:String},{name:"InUse",type:Boolean},{name:"AssetMaintenanceActivities",kind:"collection",elementType:e},{name:"AssetMaintenanceSchedules",kind:"collection",elementType:o},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),AssetManufacturer:i(v,[{name:"Id",type:Number},{name:"Manufacturer",type:String},{name:"AddressLine1",type:String},{name:"AddressLine2",type:String},{name:"AddressLine3",type:String},{name:"AddressLine4",type:String},{name:"AddressLine5",type:String},{name:"PostCode",type:String},{name:"Email",type:String},{name:"Phone1",type:String},{name:"Phone2",type:String},{name:"Fax",type:String},{name:"Website",type:String},{name:"Assets",kind:"collection",elementType:f},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),Asset:i(f,[{name:"Id",type:Number},{name:"Reference",type:String},{name:"AssetDescription",type:String},{name:"SerialNumber",type:String},{name:"Model",type:String},{name:"Location",type:String},{name:"PurchaseDate",type:Date},{name:"CommissionDate",type:Date},{name:"IntendedReplacementDate",type:Date},{name:"InUse",type:Boolean},{name:"DateRemovedFromUse",type:Date},{name:"AssetImage",type:String},{name:"CapitalAssetReference",type:String},{name:"PurchasePrice",type:String},{name:"CurrentValue",type:String},{name:"DateCurrentValueEvaluated",type:Date},{name:"AssetComments",kind:"collection",elementType:a},{name:"AssetMaintenanceActivities",kind:"collection",elementType:e},{name:"AssetMaintenanceSchedules",kind:"collection",elementType:o},{name:"AssetManufacturer",kind:"reference",type:v},{name:"AssetServiceContracts",kind:"collection",elementType:h},{name:"AssetSubscribers",kind:"collection",elementType:c},{name:"AssetSupplier",kind:"reference",type:y},{name:"AssetType",kind:"reference",type:p},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),AssetServiceContract:i(h,[{name:"Id",type:Number},{name:"Asset",kind:"reference",type:f},{name:"ServiceContract",kind:"reference",type:l},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),AssetSubscriber:i(c,[{name:"Id",type:Number},{name:"Asset",kind:"reference",type:f},{name:"Employee",kind:"reference",type:w},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),AssetSupplier:i(y,[{name:"Id",type:Number},{name:"Supplier",type:String},{name:"AddressLine1",type:String},{name:"AddressLine2",type:String},{name:"AddressLine3",type:String},{name:"AddressLine4",type:String},{name:"AddressLine5",type:String},{name:"PostCode",type:String},{name:"Email",type:String},{name:"Phone1",type:String},{name:"Phone2",type:String},{name:"Fax",type:String},{name:"Website",type:String},{name:"Assets",kind:"collection",elementType:f},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),AssetType:i(p,[{name:"Id",type:Number},{name:"AssetTypeDescription",type:String},{name:"InUse",type:Boolean},{name:"Asset",kind:"collection",elementType:f},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),Employee:i(w,[{name:"Id",type:Number},{name:"LastName",type:String},{name:"FirstName",type:String},{name:"UserName",type:String},{name:"Email",type:String},{name:"Current",type:Boolean},{name:"AssetSubscribers",kind:"collection",elementType:c},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),ServiceContract:i(l,[{name:"Id",type:Number},{name:"ContractReference",type:String},{name:"ContractName",type:String},{name:"ContractDescription",type:String},{name:"StartDate",type:Date},{name:"EndDate",type:Date},{name:"ContractPrice",type:String},{name:"CurrentContract",type:Boolean},{name:"AssetServiceContracts",kind:"collection",elementType:h},{name:"ServiceContractSupplier",kind:"reference",type:b},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),ServiceContractSupplier:i(b,[{name:"Id",type:Number},{name:"ServiceContractSupplierDetails",type:String},{name:"Contact",type:String},{name:"ContactJobDescription",type:String},{name:"Email",type:String},{name:"Phone1",type:String},{name:"Phone2",type:String},{name:"Fax",type:String},{name:"Website",type:String},{name:"AddressLine1",type:String},{name:"AddressLine2",type:String},{name:"AddressLine3",type:String},{name:"AddressLine4",type:String},{name:"AddressLine5",type:String},{name:"PostCode",type:String},{name:"ServiceContracts",kind:"collection",elementType:l},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),ApplicationData:nt(k,n.rootUri+"/ApplicationData.svc",[{name:"AssetComments",elementType:a},{name:"AssetMaintenanceActivities",elementType:e},{name:"AssetMaintenanceSchedules",elementType:o},{name:"AssetMaintenanceTypes",elementType:s},{name:"AssetManufacturers",elementType:v},{name:"Assets",elementType:f},{name:"AssetServiceContracts",elementType:h},{name:"AssetSubscribers",elementType:c},{name:"AssetSuppliers",elementType:y},{name:"AssetTypes",elementType:p},{name:"Employees",elementType:w},{name:"ServiceContracts",elementType:l},{name:"ServiceContractSuppliers",elementType:b}],[{name:"AssetComments_SingleOrDefault",value:function(t){return new r({_entitySet:this.AssetComments},n.rootUri+"/ApplicationData.svc/AssetComments(Id="+u(t,"Int32?")+")")}},{name:"AssetMaintenanceActivities_SingleOrDefault",value:function(t){return new r({_entitySet:this.AssetMaintenanceActivities},n.rootUri+"/ApplicationData.svc/AssetMaintenanceActivities(Id="+u(t,"Int32?")+")")}},{name:"AssetMaintenanceSchedules_SingleOrDefault",value:function(t){return new r({_entitySet:this.AssetMaintenanceSchedules},n.rootUri+"/ApplicationData.svc/AssetMaintenanceSchedules(Id="+u(t,"Int32?")+")")}},{name:"AssetMaintenanceTypes_SingleOrDefault",value:function(t){return new r({_entitySet:this.AssetMaintenanceTypes},n.rootUri+"/ApplicationData.svc/AssetMaintenanceTypes(Id="+u(t,"Int32?")+")")}},{name:"AssetManufacturers_SingleOrDefault",value:function(t){return new r({_entitySet:this.AssetManufacturers},n.rootUri+"/ApplicationData.svc/AssetManufacturers(Id="+u(t,"Int32?")+")")}},{name:"Assets_SingleOrDefault",value:function(t){return new r({_entitySet:this.Assets},n.rootUri+"/ApplicationData.svc/Assets(Id="+u(t,"Int32?")+")")}},{name:"AssetServiceContracts_SingleOrDefault",value:function(t){return new r({_entitySet:this.AssetServiceContracts},n.rootUri+"/ApplicationData.svc/AssetServiceContracts(Id="+u(t,"Int32?")+")")}},{name:"AssetSubscribers_SingleOrDefault",value:function(t){return new r({_entitySet:this.AssetSubscribers},n.rootUri+"/ApplicationData.svc/AssetSubscribers(Id="+u(t,"Int32?")+")")}},{name:"AssetSuppliers_SingleOrDefault",value:function(t){return new r({_entitySet:this.AssetSuppliers},n.rootUri+"/ApplicationData.svc/AssetSuppliers(Id="+u(t,"Int32?")+")")}},{name:"AssetTypes_SingleOrDefault",value:function(t){return new r({_entitySet:this.AssetTypes},n.rootUri+"/ApplicationData.svc/AssetTypes(Id="+u(t,"Int32?")+")")}},{name:"Employees_SingleOrDefault",value:function(t){return new r({_entitySet:this.Employees},n.rootUri+"/ApplicationData.svc/Employees(Id="+u(t,"Int32?")+")")}},{name:"ServiceContracts_SingleOrDefault",value:function(t){return new r({_entitySet:this.ServiceContracts},n.rootUri+"/ApplicationData.svc/ServiceContracts(Id="+u(t,"Int32?")+")")}},{name:"ServiceContractSuppliers_SingleOrDefault",value:function(t){return new r({_entitySet:this.ServiceContractSuppliers},n.rootUri+"/ApplicationData.svc/ServiceContractSuppliers(Id="+u(t,"Int32?")+")")}}]),DataWorkspace:tt(it,[{name:"ApplicationData",type:k}])})}(msls.application),function(n){function f(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"AddEditAsset",i)}function e(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"AddEditAssetComment",i)}function o(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"AddEditAssetImage",i)}function s(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"AddEditAssetMaintenanceActivity",i)}function h(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"AddEditAssetMaintenanceSchedule",i)}function c(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"AddEditAssetMaintenanceType",i)}function l(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"AddEditAssetManufacturer",i)}function a(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"AddEditAssetServiceContract",i)}function v(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"AddEditAssetSubscriber",i)}function y(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"AddEditAssetSupplier",i)}function p(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"AddEditAssetType",i)}function w(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"AddEditEmployee",i)}function b(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"AddEditServiceContract",i)}function k(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"AddEditServiceContractAsset",i)}function d(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"AddEditServiceContractSupplier",i)}function g(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"BrowseAssetMaintenanceTypes",i)}function nt(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"BrowseAssetManufacturers",i)}function tt(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"BrowseAssets",i)}function it(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"BrowseAssetsByAssetType",i)}function rt(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"BrowseAssetSuppliers",i)}function ut(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"BrowseAssetTypes",i)}function ft(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"BrowseEmployees",i)}function et(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"BrowseServiceContracts",i)}function ot(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"BrowseServiceContractSuppliers",i)}function st(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"Home",i)}function ht(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"MobileHome",i)}function ct(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"MobileSettings",i)}function lt(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"Settings",i)}var t=msls.Screen,i=msls._defineScreen,at=msls.DataServiceQuery,r=msls._toODataString,u=msls._defineShowScreen;msls._addToNamespace("msls.application",{AddEditAsset:i(f,[{name:"Asset",kind:"local",type:n.Asset},{name:"AssetComments",kind:"collection",elementType:n.AssetComment,getNavigationProperty:function(){return this.owner.Asset?this.owner.Asset.details.properties.AssetComments:null},appendQuery:function(){return this.orderByDescending("CommentDate")}},{name:"AssetMaintenanceActivities",kind:"collection",elementType:n.AssetMaintenanceActivity,getNavigationProperty:function(){return this.owner.Asset?this.owner.Asset.details.properties.AssetMaintenanceActivities:null},appendQuery:function(){return this.orderByDescending("DateDue").expand("AssetMaintenanceType")}},{name:"AssetMaintenanceSchedules",kind:"collection",elementType:n.AssetMaintenanceSchedule,getNavigationProperty:function(){return this.owner.Asset?this.owner.Asset.details.properties.AssetMaintenanceSchedules:null},appendQuery:function(){return this.orderBy("AssetMaintenanceType/MaintenanceTypeDescription").expand("AssetMaintenanceType")}},{name:"AssetServiceContracts",kind:"collection",elementType:n.AssetServiceContract,getNavigationProperty:function(){return this.owner.Asset?this.owner.Asset.details.properties.AssetServiceContracts:null},appendQuery:function(){return this.orderByDescending("ServiceContract/EndDate").expand("ServiceContract").expand("ServiceContract.ServiceContractSupplier")}},{name:"AssetSubscribers",kind:"collection",elementType:n.AssetSubscriber,getNavigationProperty:function(){return this.owner.Asset?this.owner.Asset.details.properties.AssetSubscribers:null},appendQuery:function(){return this.orderBy("Employee/LastName").thenBy("Employee/FirstName").expand("Employee")}}],[]),AddEditAssetComment:i(e,[{name:"AssetComment",kind:"local",type:n.AssetComment}],[]),AddEditAssetImage:i(o,[{name:"Asset",kind:"local",type:n.Asset}],[]),AddEditAssetMaintenanceActivity:i(s,[{name:"AssetMaintenanceActivity",kind:"local",type:n.AssetMaintenanceActivity}],[]),AddEditAssetMaintenanceSchedule:i(h,[{name:"AssetMaintenanceSchedule",kind:"local",type:n.AssetMaintenanceSchedule}],[]),AddEditAssetMaintenanceType:i(c,[{name:"AssetMaintenanceType",kind:"local",type:n.AssetMaintenanceType}],[]),AddEditAssetManufacturer:i(l,[{name:"AssetManufacturer",kind:"local",type:n.AssetManufacturer}],[]),AddEditAssetServiceContract:i(a,[{name:"AssetServiceContract",kind:"local",type:n.AssetServiceContract}],[]),AddEditAssetSubscriber:i(v,[{name:"AssetSubscriber",kind:"local",type:n.AssetSubscriber}],[]),AddEditAssetSupplier:i(y,[{name:"AssetSupplier",kind:"local",type:n.AssetSupplier}],[]),AddEditAssetType:i(p,[{name:"AssetType",kind:"local",type:n.AssetType}],[]),AddEditEmployee:i(w,[{name:"Employee",kind:"local",type:n.Employee}],[]),AddEditServiceContract:i(b,[{name:"ServiceContract",kind:"local",type:n.ServiceContract},{name:"AssetServiceContracts",kind:"collection",elementType:n.AssetServiceContract,getNavigationProperty:function(){return this.owner.ServiceContract?this.owner.ServiceContract.details.properties.AssetServiceContracts:null},appendQuery:function(){return this.orderBy("Asset/AssetDescription").expand("Asset").expand("Asset.AssetType")}}],[]),AddEditServiceContractAsset:i(k,[{name:"AssetServiceContract",kind:"local",type:n.AssetServiceContract}],[]),AddEditServiceContractSupplier:i(d,[{name:"ServiceContractSupplier",kind:"local",type:n.ServiceContractSupplier},{name:"ServiceContracts",kind:"collection",elementType:n.ServiceContract,getNavigationProperty:function(){return this.owner.ServiceContractSupplier?this.owner.ServiceContractSupplier.details.properties.ServiceContracts:null},appendQuery:function(){return this.orderByDescending("EndDate")}}],[]),BrowseAssetMaintenanceTypes:i(g,[{name:"AssetMaintenanceTypes",kind:"collection",elementType:n.AssetMaintenanceType,createQuery:function(n){return this.dataWorkspace.ApplicationData.AssetMaintenanceTypes.filter(""+(n===undefined||n===null?"true":"substringof("+r(n,"String?")+", MaintenanceTypeDescription)")+"").orderBy("MaintenanceTypeDescription")}},{name:"Search",kind:"local",type:String}],[]),BrowseAssetManufacturers:i(nt,[{name:"AssetManufacturers",kind:"collection",elementType:n.AssetManufacturer,createQuery:function(n){return this.dataWorkspace.ApplicationData.AssetManufacturers.filter("(((("+(n===undefined||n===null?"true":"substringof("+r(n,"String?")+", Manufacturer)")+" or "+(n===undefined||n===null?"true":"substringof("+r(n,"String?")+", AddressLine1)")+") or "+(n===undefined||n===null?"true":"substringof("+r(n,"String?")+", AddressLine2)")+") or "+(n===undefined||n===null?"true":"substringof("+r(n,"String?")+", AddressLine3)")+") or "+(n===undefined||n===null?"true":"substringof("+r(n,"String?")+", AddressLine4)")+") or "+(n===undefined||n===null?"true":"substringof("+r(n,"String?")+", AddressLine5)")+"").orderBy("Manufacturer")}},{name:"Search",kind:"local",type:String}],[]),BrowseAssets:i(tt,[{name:"Assets",kind:"collection",elementType:n.Asset,createQuery:function(n){return this.dataWorkspace.ApplicationData.Assets.filter(""+(n===undefined||n===null?"false":"(AssetType/Id eq "+r(n,"Int32?")+")")+"").orderBy("AssetDescription")}},{name:"AssetTypeId",kind:"local",type:Number}],[]),BrowseAssetsByAssetType:i(it,[{name:"AssetTypes",kind:"collection",elementType:n.AssetType,createQuery:function(){return this.dataWorkspace.ApplicationData.AssetTypes.orderBy("AssetTypeDescription")}}],[]),BrowseAssetSuppliers:i(rt,[{name:"AssetSuppliers",kind:"collection",elementType:n.AssetSupplier,createQuery:function(n){return this.dataWorkspace.ApplicationData.AssetSuppliers.filter("(((("+(n===undefined||n===null?"true":"substringof("+r(n,"String?")+", Supplier)")+" or "+(n===undefined||n===null?"true":"substringof("+r(n,"String?")+", AddressLine1)")+") or "+(n===undefined||n===null?"true":"substringof("+r(n,"String?")+", AddressLine2)")+") or "+(n===undefined||n===null?"true":"substringof("+r(n,"String?")+", AddressLine3)")+") or "+(n===undefined||n===null?"true":"substringof("+r(n,"String?")+", AddressLine4)")+") or "+(n===undefined||n===null?"true":"substringof("+r(n,"String?")+", AddressLine5)")+"").orderBy("Supplier")}},{name:"Search",kind:"local",type:String}],[]),BrowseAssetTypes:i(ut,[{name:"AssetTypes",kind:"collection",elementType:n.AssetType,createQuery:function(n){return this.dataWorkspace.ApplicationData.AssetTypes.filter(""+(n===undefined||n===null?"true":"substringof("+r(n,"String?")+", AssetTypeDescription)")+"").orderBy("AssetTypeDescription")}},{name:"Search",kind:"local",type:String}],[]),BrowseEmployees:i(ft,[{name:"Employees",kind:"collection",elementType:n.Employee,createQuery:function(n){return this.dataWorkspace.ApplicationData.Employees.filter("("+(n===undefined||n===null?"true":"substringof("+r(n,"String?")+", UserName)")+" or "+(n===undefined||n===null?"true":"substringof("+r(n,"String?")+", FirstName)")+") or "+(n===undefined||n===null?"true":"substringof("+r(n,"String?")+", LastName)")+"").orderBy("LastName").thenBy("FirstName")}},{name:"Search",kind:"local",type:String}],[]),BrowseServiceContracts:i(et,[{name:"ServiceContracts",kind:"collection",elementType:n.ServiceContract,createQuery:function(n){return this.dataWorkspace.ApplicationData.ServiceContracts.filter("("+(n===undefined||n===null?"true":"substringof("+r(n,"String?")+", ContractReference)")+" or "+(n===undefined||n===null?"true":"substringof("+r(n,"String?")+", ContractName)")+") or "+(n===undefined||n===null?"true":"substringof("+r(n,"String?")+", ContractDescription)")+"").orderByDescending("EndDate").expand("ServiceContractSupplier")}},{name:"Search",kind:"local",type:String}],[]),BrowseServiceContractSuppliers:i(ot,[{name:"ServiceContractSuppliers",kind:"collection",elementType:n.ServiceContractSupplier,createQuery:function(n){return this.dataWorkspace.ApplicationData.ServiceContractSuppliers.filter("((((("+(n===undefined||n===null?"true":"substringof("+r(n,"String?")+", ServiceContractSupplierDetails)")+" or "+(n===undefined||n===null?"true":"substringof("+r(n,"String?")+", AddressLine1)")+") or "+(n===undefined||n===null?"true":"substringof("+r(n,"String?")+", AddressLine2)")+") or "+(n===undefined||n===null?"true":"substringof("+r(n,"String?")+", AddressLine3)")+") or "+(n===undefined||n===null?"true":"substringof("+r(n,"String?")+", AddressLine4)")+") or "+(n===undefined||n===null?"true":"substringof("+r(n,"String?")+", AddressLine5)")+") or "+(n===undefined||n===null?"true":"substringof("+r(n,"String?")+", Contact)")+"").orderBy("ServiceContractSupplierDetails")}},{name:"Search",kind:"local",type:String}],[]),Home:i(st,[],[]),MobileHome:i(ht,[],[]),MobileSettings:i(ct,[],[]),Settings:i(lt,[],[]),showAddEditAsset:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditAsset",r,i)}),showAddEditAssetComment:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditAssetComment",r,i)}),showAddEditAssetImage:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditAssetImage",r,i)}),showAddEditAssetMaintenanceActivity:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditAssetMaintenanceActivity",r,i)}),showAddEditAssetMaintenanceSchedule:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditAssetMaintenanceSchedule",r,i)}),showAddEditAssetMaintenanceType:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditAssetMaintenanceType",r,i)}),showAddEditAssetManufacturer:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditAssetManufacturer",r,i)}),showAddEditAssetServiceContract:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditAssetServiceContract",r,i)}),showAddEditAssetSubscriber:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditAssetSubscriber",r,i)}),showAddEditAssetSupplier:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditAssetSupplier",r,i)}),showAddEditAssetType:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditAssetType",r,i)}),showAddEditEmployee:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditEmployee",r,i)}),showAddEditServiceContract:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditServiceContract",r,i)}),showAddEditServiceContractAsset:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditServiceContractAsset",r,i)}),showAddEditServiceContractSupplier:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditServiceContractSupplier",r,i)}),showBrowseAssetMaintenanceTypes:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseAssetMaintenanceTypes",i,t)}),showBrowseAssetManufacturers:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseAssetManufacturers",i,t)}),showBrowseAssets:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("BrowseAssets",r,i)}),showBrowseAssetsByAssetType:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseAssetsByAssetType",i,t)}),showBrowseAssetSuppliers:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseAssetSuppliers",i,t)}),showBrowseAssetTypes:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseAssetTypes",i,t)}),showBrowseEmployees:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseEmployees",i,t)}),showBrowseServiceContracts:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseServiceContracts",i,t)}),showBrowseServiceContractSuppliers:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseServiceContractSuppliers",i,t)}),showHome:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("Home",i,t)}),showMobileHome:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("MobileHome",i,t)}),showMobileSettings:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("MobileSettings",i,t)}),showSettings:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("Settings",i,t)})})}(msls.application),myapp.AddEditAsset.created=function(n){var t,i;n.Asset.Reference!==undefined?(t=n.Asset.Reference,i=n.Asset.AssetDescription,n.details.displayName="Edit Asset: "+t+" - "+i):n.details.displayName="Add New Asset",myapp.permissions["LightSwitchApplication:CanEditAssets"]?(n.findContentItem("DetailsTab").isReadOnly=!1,n.findContentItem("AssetMaintenanceActivitiesTab").isReadOnly=!1,n.findContentItem("AssetMaintenanceSchedulesTab").isReadOnly=!1,n.findContentItem("AssetServiceContractsTab").isReadOnly=!1,n.findContentItem("CapitalAssetDetailsTab").isReadOnly=!1,n.findContentItem("AssetSubscribersTab").isReadOnly=!1,n.findContentItem("AssetCommentsTab").isReadOnly=!1):(n.findContentItem("DetailsTab").isReadOnly=!0,n.findContentItem("AssetMaintenanceActivitiesTab").isReadOnly=!0,n.findContentItem("AssetMaintenanceSchedulesTab").isReadOnly=!0,n.findContentItem("AssetServiceContractsTab").isReadOnly=!0,n.findContentItem("CapitalAssetDetailsTab").isReadOnly=!0,n.findContentItem("AssetSubscribersTab").isReadOnly=!0,n.findContentItem("AssetCommentsTab").isReadOnly=!0),myapp.permissions["LightSwitchApplication:CanEditAssetTypes"]?(n.findContentItem("AddAssetMaintenanceActivity").isEnabled=!0,n.findContentItem("AddAssetMaintenanceSchedule").isEnabled=!0,n.findContentItem("AddAssetServiceContract").isEnabled=!0,n.findContentItem("AddAssetSubscriber").isEnabled=!0,n.findContentItem("AddAssetComment").isEnabled=!0,n.findContentItem("ShowImageUploader").isEnabled=!0):(n.findContentItem("AddAssetMaintenanceActivity").isEnabled=!1,n.findContentItem("AddAssetMaintenanceSchedule").isEnabled=!1,n.findContentItem("AddAssetServiceContract").isEnabled=!1,n.findContentItem("AddAssetSubscriber").isEnabled=!1,n.findContentItem("AddAssetComment").isEnabled=!1,n.findContentItem("ShowImageUploader").isEnabled=!1)},myapp.AddEditAssetComment.created=function(n){n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditAssetComments"]?!1:!0},myapp.AddEditAssetImage.AssetImage_render=function(n,t){createImageUploader(n,t,"max-width: 300px; max-height: 300px")},myapp.AddEditAssetMaintenanceActivity.created=function(n){n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditAssetMaintenanceActivities"]?!1:!0},myapp.AddEditAssetMaintenanceSchedule.created=function(n){n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditAssetMaintenanceSchedules"]?!1:!0},myapp.AddEditAssetMaintenanceType.created=function(n){n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditAssetMaintenanceTypes"]?!1:!0},myapp.AddEditAssetManufacturer.created=function(n){n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditAssetManufacturers"]?!1:!0},myapp.AddEditAssetServiceContract.created=function(n){n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditAssetServiceContracts"]?!1:!0},myapp.AddEditAssetSubscriber.created=function(n){n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditAssetSubscribers"]?!1:!0},myapp.AddEditAssetSupplier.created=function(n){n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditAssetSuppliers"]?!1:!0},myapp.AddEditAssetType.created=function(n){n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditAssetTypes"]?!1:!0},myapp.AddEditEmployee.created=function(n){n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditEmployees"]?!1:!0},myapp.AddEditServiceContract.created=function(n){var t;n.ServiceContract.ContractReference!==undefined?(t=n.ServiceContract.ContractReference,n.details.displayName="Edit Service Contract: "+t):n.details.displayName="Add New Service Contract",myapp.permissions["LightSwitchApplication:CanEditServiceContracts"]?(n.findContentItem("DetailsTab").isReadOnly=!1,n.findContentItem("AssetsCoveredTab").isReadOnly=!1):(n.findContentItem("DetailsTab").isReadOnly=!0,n.findContentItem("AssetsCoveredTab").isReadOnly=!0),n.findContentItem("AddAssetServiceContract").isEnabled=myapp.permissions["LightSwitchApplication:CanEditServiceContracts"]?!0:!1},myapp.AddEditServiceContractAsset.created=function(n){n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditAssetServiceContracts"]?!1:!0},myapp.AddEditServiceContractSupplier.created=function(n){var t;n.ServiceContractSupplier.ServiceContractSupplierDetails!==undefined?(t=n.ServiceContractSupplier.ServiceContractSupplierDetails,n.details.displayName="Edit Supplier: "+t):n.details.displayName="Add New Supplier",myapp.permissions["LightSwitchApplication:CanEditServiceContractSuppliers"]?(n.findContentItem("DetailsTab").isReadOnly=!1,n.findContentItem("ContractsTab").isReadOnly=!1):(n.findContentItem("DetailsTab").isReadOnly=!0,n.findContentItem("ContractsTab").isReadOnly=!0),n.findContentItem("AddServiceContract").isEnabled=myapp.permissions["LightSwitchApplication:CanEditServiceContractSuppliers"]?!0:!1},myapp.BrowseAssetMaintenanceTypes.created=function(n){n.findContentItem("AddAssetMaintenanceType").isEnabled=myapp.permissions["LightSwitchApplication:CanEditAssetMaintenanceTypes"]?!0:!1},myapp.BrowseAssetManufacturers.created=function(n){n.findContentItem("AddAssetManufacturer").isEnabled=myapp.permissions["LightSwitchApplication:CanEditAssetManufacturers"]?!0:!1},myapp.BrowseAssets.created=function(n){n.findContentItem("AddAsset").isEnabled=myapp.permissions["LightSwitchApplication:CanEditAssets"]?!0:!1},myapp.BrowseAssetSuppliers.created=function(n){n.findContentItem("AddAssetSupplier").isEnabled=myapp.permissions["LightSwitchApplication:CanEditAssetSuppliers"]?!0:!1},myapp.BrowseAssetTypes.created=function(n){n.findContentItem("AddAssetType").isEnabled=myapp.permissions["LightSwitchApplication:CanEditAssetTypes"]?!0:!1},myapp.BrowseEmployees.created=function(n){n.findContentItem("AddEmployee").isEnabled=myapp.permissions["LightSwitchApplication:CanEditEmployees"]?!0:!1},myapp.BrowseServiceContracts.created=function(n){n.findContentItem("AddServiceContract").isEnabled=myapp.permissions["LightSwitchApplication:CanEditServiceContracts"]?!0:!1},myapp.BrowseServiceContractSuppliers.created=function(n){n.findContentItem("AddServiceContractSupplier").isEnabled=myapp.permissions["LightSwitchApplication:CanEditServiceContractSuppliers"]?!0:!1},myapp.Home.ManageAssets_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/Assets.png)","background-repeat":"no-repeat","background-position":"center",width:"250px",height:"250px"})},myapp.Home.ManageServiceContracts_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/ServiceContracts.png)","background-repeat":"no-repeat","background-position":"center",width:"250px",height:"250px"})},myapp.Home.ManageServiceContractSuppliers_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/ServiceContractSupplier.png)","background-repeat":"no-repeat","background-position":"center",width:"250px",height:"250px"})},myapp.Home.Settings_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/Settings.png)","background-repeat":"no-repeat","background-position":"center",width:"250px",height:"250px"})},myapp.Home.created=function(){$.getJSON("../UserPermissions/UserPermissions/",function(n){myapp.permissions=n})},myapp.MobileHome.ManageAssets_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MobileAssets.png)","background-repeat":"no-repeat","background-position":"center",width:"90px",height:"90px"})},myapp.MobileHome.ManageServiceContracts_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MobileServiceContracts.png)","background-repeat":"no-repeat","background-position":"center",width:"90px",height:"90px"})},myapp.MobileHome.ManageServiceContractSuppliers_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MobileServiceContractSupplier.png)","background-repeat":"no-repeat","background-position":"center",width:"90px",height:"90px"})},myapp.MobileHome.Settings_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MobileSettings.png)","background-repeat":"no-repeat","background-position":"center",width:"90px",height:"90px"})},myapp.MobileHome.created=function(){$.getJSON("../UserPermissions/UserPermissions/",function(n){myapp.permissions=n})},myapp.MobileSettings.AssetTypes_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MobileAssetTypes.png)","background-repeat":"no-repeat","background-position":"center",width:"90px",height:"90px"})},myapp.MobileSettings.AssetMaintenanceTypes_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MobileMaintenanceTypes.png)","background-repeat":"no-repeat","background-position":"center",width:"90px",height:"90px"})},myapp.MobileSettings.Manufacturers_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MobileManufacturers.png)","background-repeat":"no-repeat","background-position":"center",width:"90px",height:"90px"})},myapp.MobileSettings.Suppliers_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MobileSuppliers.png)","background-repeat":"no-repeat","background-position":"center",width:"90px",height:"90px"})},myapp.MobileSettings.Employees_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MobileEmployees.png)","background-repeat":"no-repeat","background-position":"center",width:"90px",height:"90px"})},myapp.Settings.AssetTypes_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/AssetTypes.png)","background-repeat":"no-repeat","background-position":"center",width:"250px",height:"250px"})},myapp.Settings.AssetMaintenanceTypes_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MaintenanceTypes.png)","background-repeat":"no-repeat","background-position":"center",width:"250px",height:"250px"})},myapp.Settings.AssetManufacturers_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/Manufacturers.png)","background-repeat":"no-repeat","background-position":"center",width:"250px",height:"250px"})},myapp.Settings.AssetSuppliers_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/Suppliers.png)","background-repeat":"no-repeat","background-position":"center",width:"250px",height:"250px"})},myapp.Settings.Employees_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/Employees.png)","background-repeat":"no-repeat","background-position":"center",width:"250px",height:"250px"})};