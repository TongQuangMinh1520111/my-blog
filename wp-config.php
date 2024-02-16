<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'db_myblogvn' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '123456' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ',ry9&!DDDbgM+mq:}}Kwu5c>wLh/KI{!&QkPy{^[NE3hdyr[&@8q}hvsQzHysC7#' );
define( 'SECURE_AUTH_KEY',  'uDocA!LiZ&8O;T/%fy+#$<-]]Ud;5NY}2E]dpnS+LE)<joST^^sRWB{d8lq6=~p{' );
define( 'LOGGED_IN_KEY',    'qHiv<k/x0bH(c=F4Zmpy$tBz1`,JXNM.Vvq+[xTH8/r{PlYK|@Df}a:gvZR81gM9' );
define( 'NONCE_KEY',        'H H9Q5L#1++9Gf*}$v3+=}g+IX`3SnB@bl-Lh{In[C[])XKS3$6|`%~Ayfg3HbWP' );
define( 'AUTH_SALT',        '342JHsMDMmRq,x$I)`g%==SWoG)+fUCKv^i>nxG4B<N^U/De,1w%39$s%uoDDtk;' );
define( 'SECURE_AUTH_SALT', 'Jifc`7QiM+H.BPcCPRcWHlw.d,s%gu;s;_aQHOGm]kxD1edc]zM5IbN>YI=rLW.O' );
define( 'LOGGED_IN_SALT',   'S L<ym]35-vfAbQ;~?W&@LvU/Q/or<hEc0*vey6sq_)rW#{sm{2>ODw(FR*v]916' );
define( 'NONCE_SALT',       '*WYg(6GCZkVl{#|KZ4Yl[E#g4E[s,yIzGWJ8QSag:/i9qG[@Kp5@Y*WF W2oHCLJ' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
