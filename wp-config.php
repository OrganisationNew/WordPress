<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'IMHGw@k $be/Wdl;=~Dv.>/imiy/h4Ma<#NBhISt.wI)^U4-mETfDskV]+DnLK;K');
define('SECURE_AUTH_KEY',  '{)-5L8>fMkQs:xFBh?UWZs68;L`{2ab~,,h!=ro;6rU8[#rWSX>^J~SVZYqk1X!M');
define('LOGGED_IN_KEY',    'w+2^XLDN/:n|:Aoq^#hXj|nj$z:HyGC(aL(I,eoBe0wuQ~?(kzQB32dPZ5T6q3@U');
define('NONCE_KEY',        '&[1|T}Q6K eC9IERd9 2#~<I WSH8(GMNd$y9IPA-8W/`-`7Fo)2}h:_n`tk!ntz');
define('AUTH_SALT',        '}tWRG^FV]}%E26Ol>RQK@K&vD]/KcEu2#-Fp,tCYl,ZMIQPQ=W&*>gvyT?EPX:(]');
define('SECURE_AUTH_SALT', 'V/Rqnd=wD@,&dp,y0I=I]X*?#|u[0_HUnJ9|x*9m##TlHn^6K wJXAZT.:<dwG)o');
define('LOGGED_IN_SALT',   '54tz>F*2e0=Xa;mcu/{@jc6H RZ+t2wlhG8C0vL9X.@KZp*I2?d76vh;ph8]Vroo');
define('NONCE_SALT',       'xi_%!PvrDFBs<B4#_w!j)/09X/Mw5@X[o86EVb{u|Flb3qkg$Ddt-$MOqHY:%$FX');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
