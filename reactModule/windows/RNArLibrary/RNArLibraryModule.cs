using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Ar.Library.RNArLibrary
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNArLibraryModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNArLibraryModule"/>.
        /// </summary>
        internal RNArLibraryModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNArLibrary";
            }
        }
    }
}
