﻿/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditAssetServiceContract.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditAssetServiceContracts"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};